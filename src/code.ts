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

const SHAPES = {
  rectangle: "RECTANGLE",
  triangle: "TRIANGLE",
  ellipse: "ELLIPSE",
  star: "STAR",
};

figma.showUI(__html__, { width: 375, height: 630 });

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
        }
        shape.x = x * (msg.gap + msg.size);
        shape.y = y * (msg.gap + msg.size);
        shape.fills = [];
        shape.strokes = [];
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
        shape.resize(msg.size, msg.size);
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
