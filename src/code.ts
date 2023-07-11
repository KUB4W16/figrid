function hexToRGB(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : null;
}

var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (e) {
    var t = "";
    var n, r, i, s, o, u, a;
    var f = 0;
    e = Base64._utf8_encode(e);
    while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = ((n & 3) << 4) | (r >> 4);
      u = ((r & 15) << 2) | (i >> 6);
      a = i & 63;
      if (isNaN(r)) {
        u = a = 64;
      } else if (isNaN(i)) {
        a = 64;
      }
      t =
        t +
        this._keyStr.charAt(s) +
        this._keyStr.charAt(o) +
        this._keyStr.charAt(u) +
        this._keyStr.charAt(a);
    }
    return t;
  },
  decode: function (e) {
    var t = "";
    var n, r, i;
    var s, o, u, a;
    var f = 0;
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = (s << 2) | (o >> 4);
      r = ((o & 15) << 4) | (u >> 2);
      i = ((u & 3) << 6) | a;
      t = t + String.fromCharCode(n);
      if (u != 64) {
        t = t + String.fromCharCode(r);
      }
      if (a != 64) {
        t = t + String.fromCharCode(i);
      }
    }
    t = Base64._utf8_decode(t);
    return t;
  },
  _utf8_encode: function (e) {
    e = e.replace(/\r\n/g, "\n");
    var t = "";
    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode((r >> 6) | 192);
        t += String.fromCharCode((r & 63) | 128);
      } else {
        t += String.fromCharCode((r >> 12) | 224);
        t += String.fromCharCode(((r >> 6) & 63) | 128);
        t += String.fromCharCode((r & 63) | 128);
      }
    }
    return t;
  },
  _utf8_decode: function (e) {
    var c1, c2, c3;
    var t = "";
    var n = 0;
    var r = (c1 = c2 = 0);
    while (n < e.length) {
      r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
        n++;
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1);
        t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
        n += 2;
      } else {
        c2 = e.charCodeAt(n + 1);
        c3 = e.charCodeAt(n + 2);
        t += String.fromCharCode(
          ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        n += 3;
      }
    }
    return t;
  },
};

const SHAPES = {
  rectangle: "RECTANGLE",
  triangle: "TRIANGLE",
  ellipse: "ELLIPSE",
  star: "STAR",
  selection: "SELECTION",
};

figma.showUI(__html__, { width: 375, height: 630 });
if (figma.currentPage.selection.length > 0) {
  figma.currentPage.selection[0].exportAsync({ format: "SVG" }).then((res) => {
    try {
      var base64Data = String.fromCharCode.apply(null, res);
      figma.ui.postMessage({
        type: "selection",
        selection: Base64.encode(base64Data),
        size: figma.currentPage.selection[0].height,
      });
    } catch (e) {
      figma.ui.postMessage({
        type: "selection_too_complex",
        width: 0,
        height: 0,
      });
    }
  });
} else {
  figma.ui.postMessage({ type: "selection_empty" });
}
figma.ui.onmessage = (msg) => {
  if (msg.type === "create-grid") {
    const nodes: SceneNode[] = [];
    for (let y = 0; y < msg.countY; y++) {
      for (let x = 0; x < msg.countX; x++) {
        var shape;
        if (msg.shape === SHAPES.rectangle) {
          shape = figma.createRectangle();
        } else if (msg.shape === SHAPES.ellipse) {
          shape = figma.createEllipse();
        } else if (msg.shape === SHAPES.triangle) {
          shape = figma.createPolygon();
        } else if (msg.shape === SHAPES.star) {
          shape = figma.createStar();
        } else if (msg.shape === SHAPES.selection) {
          //   console.log(figma.currentPage.selection[0]);
          shape = figma.currentPage.selection[0].clone();
          msg.fill.enabled = false;
          msg.stroke.enabled = false;
        }
        shape.x = x * (msg.gap + msg.size);
        shape.y = y * (msg.gap + msg.size);
        if (!(msg.shape === SHAPES.selection)) {
          shape.fills = [];
          shape.strokes = [];
          shape.resize(msg.size, msg.size);
        } else {
          let scale = msg.size / shape.height;
          shape.rescale(scale);
        }
        if (msg.fill.enabled) {
          shape.fills = [
            {
              type: "SOLID",
              color: hexToRGB(msg.fill.color),
              opacity: msg.fill.opacity,
            },
          ];
        }
        if (msg.stroke.enabled) {
          shape.strokeWeight = msg.stroke.width;
          shape.strokes = [
            {
              type: "SOLID",
              color: hexToRGB(msg.stroke.color),
              opacity: msg.stroke.opacity,
            },
          ];
        }
        figma.currentPage.appendChild(shape);
        nodes.push(shape);
      }
    }
    figma.currentPage.selection = nodes;
    var group = figma.group(figma.currentPage.selection, figma.currentPage);
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.currentPage.selection = [group];
  }
  figma.closePlugin();
};
