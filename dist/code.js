/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
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
            }
            else if (isNaN(i)) {
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
            }
            else if (r > 127 && r < 2048) {
                t += String.fromCharCode((r >> 6) | 192);
                t += String.fromCharCode((r & 63) | 128);
            }
            else {
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
            }
            else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
                n += 2;
            }
            else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode(((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
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
        }
        catch (e) {
            figma.ui.postMessage({
                type: "selection_too_complex",
                width: 0,
                height: 0,
            });
        }
    });
}
else {
    figma.ui.postMessage({ type: "selection_empty" });
}
figma.ui.onmessage = (msg) => {
    if (msg.type === "create-grid") {
        const nodes = [];
        for (let y = 0; y < msg.countY; y++) {
            for (let x = 0; x < msg.countX; x++) {
                var shape;
                if (msg.shape === SHAPES.rectangle) {
                    shape = figma.createRectangle();
                }
                else if (msg.shape === SHAPES.ellipse) {
                    shape = figma.createEllipse();
                }
                else if (msg.shape === SHAPES.triangle) {
                    shape = figma.createPolygon();
                }
                else if (msg.shape === SHAPES.star) {
                    shape = figma.createStar();
                }
                else if (msg.shape === SHAPES.selection) {
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
                }
                else {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBLGlEQUFpRCxlQUFlO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ3JpZC8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhleFRvUkdCKGhleCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSAvIDI1NSxcclxuICAgICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNikgLyAyNTUsXHJcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpIC8gMjU1LFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IG51bGw7XHJcbn1cclxudmFyIEJhc2U2NCA9IHtcclxuICAgIF9rZXlTdHI6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcclxuICAgIGVuY29kZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIG4sIHIsIGksIHMsIG8sIHUsIGE7XHJcbiAgICAgICAgdmFyIGYgPSAwO1xyXG4gICAgICAgIGUgPSBCYXNlNjQuX3V0ZjhfZW5jb2RlKGUpO1xyXG4gICAgICAgIHdoaWxlIChmIDwgZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbiA9IGUuY2hhckNvZGVBdChmKyspO1xyXG4gICAgICAgICAgICByID0gZS5jaGFyQ29kZUF0KGYrKyk7XHJcbiAgICAgICAgICAgIGkgPSBlLmNoYXJDb2RlQXQoZisrKTtcclxuICAgICAgICAgICAgcyA9IG4gPj4gMjtcclxuICAgICAgICAgICAgbyA9ICgobiAmIDMpIDw8IDQpIHwgKHIgPj4gNCk7XHJcbiAgICAgICAgICAgIHUgPSAoKHIgJiAxNSkgPDwgMikgfCAoaSA+PiA2KTtcclxuICAgICAgICAgICAgYSA9IGkgJiA2MztcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHIpKSB7XHJcbiAgICAgICAgICAgICAgICB1ID0gYSA9IDY0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTmFOKGkpKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gNjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdCA9XHJcbiAgICAgICAgICAgICAgICB0ICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KHMpICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KG8pICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KHUpICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH0sXHJcbiAgICBkZWNvZGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBuLCByLCBpO1xyXG4gICAgICAgIHZhciBzLCBvLCB1LCBhO1xyXG4gICAgICAgIHZhciBmID0gMDtcclxuICAgICAgICBlID0gZS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XHJcbiAgICAgICAgd2hpbGUgKGYgPCBlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7XHJcbiAgICAgICAgICAgIG8gPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtcclxuICAgICAgICAgICAgdSA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO1xyXG4gICAgICAgICAgICBhID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7XHJcbiAgICAgICAgICAgIG4gPSAocyA8PCAyKSB8IChvID4+IDQpO1xyXG4gICAgICAgICAgICByID0gKChvICYgMTUpIDw8IDQpIHwgKHUgPj4gMik7XHJcbiAgICAgICAgICAgIGkgPSAoKHUgJiAzKSA8PCA2KSB8IGE7XHJcbiAgICAgICAgICAgIHQgPSB0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShuKTtcclxuICAgICAgICAgICAgaWYgKHUgIT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIHQgPSB0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYSAhPSA2NCkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQgPSBCYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfSxcclxuICAgIF91dGY4X2VuY29kZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZS5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIik7XHJcbiAgICAgICAgdmFyIHQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IGUuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgaWYgKHIgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyID4gMTI3ICYmIHIgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHIgPj4gNikgfCAxOTIpO1xyXG4gICAgICAgICAgICAgICAgdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChyICYgNjMpIHwgMTI4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgociA+PiAxMikgfCAyMjQpO1xyXG4gICAgICAgICAgICAgICAgdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgociA+PiA2KSAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHIgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfSxcclxuICAgIF91dGY4X2RlY29kZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgYzEsIGMyLCBjMztcclxuICAgICAgICB2YXIgdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIG4gPSAwO1xyXG4gICAgICAgIHZhciByID0gKGMxID0gYzIgPSAwKTtcclxuICAgICAgICB3aGlsZSAobiA8IGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHIgPSBlLmNoYXJDb2RlQXQobik7XHJcbiAgICAgICAgICAgIGlmIChyIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocik7XHJcbiAgICAgICAgICAgICAgICBuKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAociA+IDE5MSAmJiByIDwgMjI0KSB7XHJcbiAgICAgICAgICAgICAgICBjMiA9IGUuY2hhckNvZGVBdChuICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChyICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuICAgICAgICAgICAgICAgIG4gKz0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGMyID0gZS5jaGFyQ29kZUF0KG4gKyAxKTtcclxuICAgICAgICAgICAgICAgIGMzID0gZS5jaGFyQ29kZUF0KG4gKyAyKTtcclxuICAgICAgICAgICAgICAgIHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKHIgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICBuICs9IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9LFxyXG59O1xyXG5jb25zdCBTSEFQRVMgPSB7XHJcbiAgICByZWN0YW5nbGU6IFwiUkVDVEFOR0xFXCIsXHJcbiAgICB0cmlhbmdsZTogXCJUUklBTkdMRVwiLFxyXG4gICAgZWxsaXBzZTogXCJFTExJUFNFXCIsXHJcbiAgICBzdGFyOiBcIlNUQVJcIixcclxuICAgIHNlbGVjdGlvbjogXCJTRUxFQ1RJT05cIixcclxufTtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzNzUsIGhlaWdodDogNjMwIH0pO1xyXG5pZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5leHBvcnRBc3luYyh7IGZvcm1hdDogXCJTVkdcIiB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0RGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgcmVzKTtcclxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZWxlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogQmFzZTY0LmVuY29kZShiYXNlNjREYXRhKSxcclxuICAgICAgICAgICAgICAgIHNpemU6IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5oZWlnaHQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNlbGVjdGlvbl90b29fY29tcGxleFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmVsc2Uge1xyXG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInNlbGVjdGlvbl9lbXB0eVwiIH0pO1xyXG59XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcclxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJjcmVhdGUtZ3JpZFwiKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1zZy5jb3VudFk7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1zZy5jb3VudFg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNoYXBlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5zaGFwZSA9PT0gU0hBUEVTLnJlY3RhbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cuc2hhcGUgPT09IFNIQVBFUy5lbGxpcHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUgPSBmaWdtYS5jcmVhdGVFbGxpcHNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cuc2hhcGUgPT09IFNIQVBFUy50cmlhbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlID0gZmlnbWEuY3JlYXRlUG9seWdvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobXNnLnNoYXBlID09PSBTSEFQRVMuc3Rhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlID0gZmlnbWEuY3JlYXRlU3RhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobXNnLnNoYXBlID09PSBTSEFQRVMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnLmZpbGwuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1zZy5zdHJva2UuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2hhcGUueCA9IHggKiAobXNnLmdhcCArIG1zZy5zaXplKTtcclxuICAgICAgICAgICAgICAgIHNoYXBlLnkgPSB5ICogKG1zZy5nYXAgKyBtc2cuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShtc2cuc2hhcGUgPT09IFNIQVBFUy5zZWxlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5zdHJva2VzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUucmVzaXplKG1zZy5zaXplLCBtc2cuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBtc2cuc2l6ZSAvIHNoYXBlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5yZXNjYWxlKHNjYWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtc2cuZmlsbC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuZmlsbHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoZXhUb1JHQihtc2cuZmlsbC5jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBtc2cuZmlsbC5vcGFjaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobXNnLnN0cm9rZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuc3Ryb2tlV2VpZ2h0ID0gbXNnLnN0cm9rZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5zdHJva2VzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaGV4VG9SR0IobXNnLnN0cm9rZS5jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBtc2cuc3Ryb2tlLm9wYWNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKHNoYXBlKTtcclxuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goc2hhcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xyXG4gICAgICAgIHZhciBncm91cCA9IGZpZ21hLmdyb3VwKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XHJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2dyb3VwXTtcclxuICAgIH1cclxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==