import "./ui.scss";

const SHAPES = {
  rectangle: "RECTANGLE",
  triangle: "TRIANGLE",
  ellipse: "ELLIPSE",
  star: "STAR",
  selection: "SELECTION",
};

const image = new Image();
var selection_size = 0;

onmessage = (event) => {
  if (event.data.pluginMessage.type === "selection") {
    image.src =
      "data:image/svg+xml;base64," + event.data.pluginMessage.selection;
    selection_size = event.data.pluginMessage.size; //!jak coś to usunąć
  } else if (event.data.pluginMessage.type === "selection_too_complex") {
    image.src = "";
    document.querySelector("#size").value = event.data.pluginMessage.height;
  } else if (event.data.pluginMessage.type === "selection_empty") {
    var elementToRemove = document.querySelector(
      ".section__selector__option[data-shape=SELECTION]"
    );
    console.log(elementToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
  }
};

window.addEventListener("load", loaded);

function drawGrid(canvas, ctx, countX, countY, size, gap, fill, stroke, shape) {
  size = size * 2;
  gap = gap * 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (fill.enabled) {
    ctx.fillStyle = "#" + fill.color;
  }
  if (stroke.enabled) {
    ctx.lineWidth = stroke.width * 4;
    ctx.strokeStyle = "#" + stroke.color;
  }
  for (var i = 1; i <= countX; i++) {
    for (var j = 1; j <= countY; j++) {
      let x =
        canvas.width / 2 - ((countX + 2) / 2) * (gap + size) + i * (size + gap);
      let y =
        canvas.height / 2 -
        ((countY + 2) / 2) * (gap + size) +
        j * (size + gap);
      if (shape === SHAPES.rectangle) {
        ctx.beginPath();
        ctx.rect(x, y, size, size);
      } else if (shape === SHAPES.triangle) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - (size * Math.sqrt(3)) / 2);
        ctx.lineTo(x, y);
      } else if (shape === SHAPES.ellipse) {
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2, true);
      } else if (shape === SHAPES.star) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + (size / 2) * 0.75, y);
        ctx.lineTo(x + (size / 3) * 1.5, y - (size * Math.sqrt(2)) / 4);
        ctx.lineTo(x + (size / 2) * 1.25, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + (size / 3) * 2, y + size / 4);
        ctx.lineTo(x + (size / 4) * 3, y + (size / 3) * 1.75);
        ctx.lineTo(x + (size / 4) * 2, y + size / 3);
        ctx.lineTo(x + size / 4, y + (size / 3) * 1.75);
        ctx.lineTo(x + size / 3, y + size / 4);
        ctx.lineTo(x, y);
      } else if (shape === SHAPES.selection) {
        let h = size;
        let w = (image.width * h) / image.height;
        ctx.drawImage(image, x, y, w, h);
      } else {
        ctx.beginPath();
        ctx.rect(x, y, size, size);
      }
      ctx.save();
      ctx.clip();
      if (fill.enabled) {
        ctx.fill();
      }
      if (stroke.enabled) {
        ctx.stroke();
      }
      ctx.restore();
    }
  }
}

function loaded() {
  const createButton = document.querySelector("#create");
  const cancelButton = document.querySelector("#cancel");

  const xCountInput = document.querySelector("#countX");
  const yCountInput = document.querySelector("#countY");
  const sizeInput = document.querySelector("#size");
  const gapInput = document.querySelector("#gap");

  const fillCheckbox = document.querySelector("#fillStateCheckbox");
  const strokeCheckbox = document.querySelector("#strokeStateCheckbox");

  const backgroundColorInput = {
    input: document.querySelector("#backgroundColor"),
    hiddenInput: document.querySelector("#backgroundHiddenColorInput"),
    opacityInput: document.querySelector("#backgroundOpacity"),
    colorPreview: document.querySelector("#backgroundColorPreview"),
    enabled: true,
  };

  const fillColorInput = {
    input: document.querySelector("#fillColor"),
    hiddenInput: document.querySelector("#fillHiddenColorInput"),
    opacityInput: document.querySelector("#fillOpacity"),
    colorPreview: document.querySelector("#fillColorPreview"),
    enabled: fillCheckbox.checked,
  };

  const strokeColorInput = {
    input: document.querySelector("#strokeColor"),
    hiddenInput: document.querySelector("#strokeHiddenColorInput"),
    opacityInput: document.querySelector("#strokeOpacity"),
    widthInput: document.querySelector("#strokeWidth"),
    colorPreview: document.querySelector("#strokeColorPreview"),
    enabled: strokeCheckbox.checked,
  };

  const options = document.querySelectorAll(".section__selector__option");

  const canvas = document.getElementById("previewCanvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext("2d");

  const inputsList = [
    xCountInput,
    yCountInput,
    sizeInput,
    gapInput,
    fillColorInput.input,
    fillColorInput.opacityInput,
    strokeColorInput.input,
    strokeColorInput.opacityInput,
    strokeColorInput.widthInput,
    backgroundColorInput.input,
    backgroundColorInput.opacityInput,
  ];

  const colorPreviews = [
    fillColorInput.colorPreview,
    strokeColorInput.colorPreview,
    backgroundColorInput.colorPreview,
  ];

  const hiddenInputs = [
    fillColorInput.hiddenInput,
    strokeColorInput.hiddenInput,
    backgroundColorInput.hiddenInput,
  ];

  function refreshCanvas() {
    var fillOpacity = (
      (parseInt(fillColorInput.opacityInput.value, 10) * 255) /
      100
    ).toString(16);
    var strokeOpacity = (
      (parseInt(strokeColorInput.opacityInput.value, 10) * 255) /
      100
    ).toString(16);
    var backgroundOpacity = (
      (parseInt(backgroundColorInput.opacityInput.value, 10) * 255) /
      100
    ).toString(16);
    if (fillOpacity.includes(".")) {
      fillOpacity = fillOpacity.slice(0, fillOpacity.indexOf("."));
    }
    if (fillOpacity.length === 1) {
      fillOpacity = "0" + fillOpacity;
    }

    if (strokeOpacity.includes(".")) {
      strokeOpacity = strokeOpacity.slice(0, strokeOpacity.indexOf("."));
    }
    if (strokeOpacity.length === 1) {
      strokeOpacity = "0" + strokeOpacity;
    }

    if (backgroundOpacity.includes(".")) {
      strokeOpacity = strokeOpacity.slice(0, strokeOpacity.indexOf("."));
    }
    if (backgroundOpacity.length === 1) {
      strokeOpacity = "0" + strokeOpacity;
    }

    var fillColor = fillColorInput.input.value + fillOpacity;
    var strokeColor = strokeColorInput.input.value + strokeOpacity;
    var backgroundColor = backgroundColorInput.input.value + backgroundOpacity;
    var size = parseInt(sizeInput.value, 10);
    var gap = parseInt(gapInput.value, 10);
    var countX = parseInt(xCountInput.value, 10);
    var countY = parseInt(yCountInput.value, 10);
    var shape = document.querySelector(".section__selector__option--active")
      .dataset.shape;
    var strokeWidth = parseInt(strokeColorInput.widthInput.value, 10);

    canvas.width = (countX + 3) * (size + gap) * 2;
    canvas.height = (countY + 3) * (size + gap) * 2;
    canvas.style.width = canvas.width;
    canvas.style.height = canvas.height;
    canvas.parentNode.style.backgroundColor = "#" + backgroundColor;

    var fill = {
      enabled: fillColorInput.enabled,
      color: fillColor,
    };

    var stroke = {
      enabled: strokeColorInput.enabled,
      color: strokeColor,
      width: strokeWidth,
    };

    drawGrid(canvas, ctx, countX, countY, size, gap, fill, stroke, shape);
  }

  fillCheckbox.addEventListener("change", () => {
    fillColorInput.enabled = fillCheckbox.checked;
    refreshCanvas();
    fillColorInput.input.disabled = !fillCheckbox.checked;
    fillColorInput.opacityInput.disabled = !fillCheckbox.checked;
    fillColorInput.colorPreview.parentNode.style.opacity = fillCheckbox.checked
      ? 1
      : 0.25;
  });

  strokeCheckbox.addEventListener("change", () => {
    strokeColorInput.enabled = strokeCheckbox.checked;
    refreshCanvas();
    strokeColorInput.input.disabled = !strokeCheckbox.checked;
    strokeColorInput.widthInput.disabled = !strokeCheckbox.checked;
    strokeColorInput.opacityInput.disabled = !strokeCheckbox.checked;
    strokeColorInput.colorPreview.parentNode.style.opacity =
      strokeCheckbox.checked ? 1 : 0.25;
    strokeColorInput.widthInput.parentNode.style.opacity =
      strokeCheckbox.checked ? 1 : 0.25;
  });

  fillColorInput.colorPreview.style.backgroundColor =
    "#" + fillColorInput.input.value;
  strokeColorInput.colorPreview.style.backgroundColor =
    "#" + strokeColorInput.input.value;
  backgroundColorInput.colorPreview.style.backgroundColor =
    "#" + backgroundColorInput.input.value;

  refreshCanvas();

  options.forEach((option) => {
    inputsList.push(option);
    option.addEventListener("click", () => {
      // console.log(
      //   option.dataset.shape === "SELECTION" && !image.src,
      //   option.dataset.shape,
      //   image.src
      // );
      for (const sibling of option.parentElement.children) {
        sibling.classList.remove("section__selector__option--active");
      }
      option.classList.toggle("section__selector__option--active");
      refreshCanvas();
      if (option.dataset.shape === "SELECTION") {
        document
          .querySelector(".section__text")
          .classList.add("section__text--active");
        sizeInput.value = selection_size; //!last change
      } else {
        document
          .querySelector(".section__text")
          .classList.remove("section__text--active");
      }
      if (option.dataset.shape === "SELECTION" && !image.src) {
        var previewCover = document.querySelector(".section__preview__cover");
        previewCover.style.display = "flex";
      } else {
        var previewCover = document.querySelector(".section__preview__cover");
        previewCover.style.display = "none";
      }
    });
  });

  hiddenInputs.forEach((input) => {
    if (input === fillColorInput.hiddenInput) {
      var object = fillColorInput;
    } else if (input === strokeColorInput.hiddenInput) {
      var object = strokeColorInput;
    } else if (input === backgroundColorInput.hiddenInput) {
      var object = backgroundColorInput;
    }
    input.addEventListener("change", () => {
      object.input.value = input.value.slice(1);
      var event = document.createEvent("HTMLEvents");
      event.initEvent("change", false, true);
      object.input.dispatchEvent(event);
    });
  });

  colorPreviews.forEach((preview) => {
    preview.addEventListener("click", () => {
      if (preview === fillColorInput.colorPreview) {
        var object = fillColorInput;
      } else if (preview === strokeColorInput.colorPreview) {
        var object = strokeColorInput;
      } else if (preview === backgroundColorInput.colorPreview) {
        var object = backgroundColorInput;
      }
      object.hiddenInput.click();
    });
  });

  inputsList.forEach((input) => {
    input.addEventListener("change", () => {
      if (
        input === fillColorInput.input ||
        input === strokeColorInput.input ||
        input === backgroundColorInput.input
      ) {
        if (input === fillColorInput.input) {
          var object = fillColorInput;
        } else if (input === strokeColorInput.input) {
          var object = strokeColorInput;
        } else if (input === backgroundColorInput.input) {
          var object = backgroundColorInput;
        }

        if (object.enabled) {
          var inputValue = input.value.replace(/[^0-9a-fA-F_]/g, "");
          if (inputValue === "" && input === fillColorInput.input)
            inputValue = "C4C4C4";
          if (inputValue === "" && input === strokeColorInput.input)
            inputValue = "000000";
          if (inputValue == "" && input === backgroundColorInput.input)
            inputValue = "E5E5E5";
          switch (inputValue.length) {
            case 1: {
              let _color = inputValue.repeat(6);
              input.value = _color.toUpperCase();
              break;
            }
            case 2: {
              let _color = inputValue.repeat(3);
              input.value = _color.toUpperCase();
              break;
            }
            case 3: {
              let splittedValues = inputValue.split("");
              input.value =
                `${splittedValues[0]}${splittedValues[0]}${splittedValues[1]}${splittedValues[1]}${splittedValues[2]}${splittedValues[2]}`.toUpperCase();
              break;
            }
            case 4:
            case 5: {
              let splittedValues = inputValue
                .substr(0, inputValue.length - (inputValue.length - 3))
                .split("");
              input.value =
                `${splittedValues[0]}${splittedValues[0]}${splittedValues[1]}${splittedValues[1]}${splittedValues[2]}${splittedValues[2]}`.toUpperCase();
              break;
            }
            default:
              input.value = inputValue.toUpperCase();
          }
          var opacity = Math.round(
            (parseInt(object.opacityInput.value, 10) / 100) * 255
          ).toString(16);
          object.colorPreview.style.backgroundColor =
            "#" + input.value + opacity;
        }
      } else if (
        input === fillColorInput.opacityInput ||
        input === strokeColorInput.opacityInput ||
        input === backgroundColorInput.opacityInput
      ) {
        if (input === fillColorInput.opacityInput) {
          var object = fillColorInput;
        } else if (input === strokeColorInput.opacityInput) {
          var object = strokeColorInput;
        } else if (input === backgroundColorInput.opacityInput) {
          var object = backgroundColorInput;
        }
        if (object.enabled) {
          var colorPreview = object.colorPreview;
          var colorInput = object.input;
          if (parseInt(input.value, 10) > 100) {
            input.value = 100;
          }
          if (!input.value.endsWith("%")) {
            input.value = input.value + "%";
          }
          var opacity = Math.round(
            (parseInt(input.value, 10) / 100) * 255
          ).toString(16);
          colorPreview.style.backgroundColor = "#" + colorInput.value + opacity;
        }
      } else {
        if (parseInt(input.value, 10) <= 0 || !parseInt(input.value, 10)) {
          input.value = 1;
        }
      }
      refreshCanvas();
    });
  });

  let scale = 0.5;
  canvas.parentNode.addEventListener("wheel", (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
      scale += event.deltaY * -0.01;
      scale = Math.min(Math.max(0.125, scale), 4);
      canvas.style.transform = `scale(${scale})`;
    }
  });

  createButton.addEventListener("click", () => {
    var fillColor = "#" + fillColorInput.input.value;
    var strokeColor = "#" + strokeColorInput.input.value;
    var size = parseInt(sizeInput.value, 10);
    var gap = parseInt(gapInput.value, 10);
    var countX = parseInt(xCountInput.value, 10);
    var countY = parseInt(yCountInput.value, 10);
    var shape = document.querySelector(".section__selector__option--active")
      .dataset.shape;
    var fillOpacity = parseInt(fillColorInput.opacityInput.value, 10) / 100;
    var strokeOpacity = parseInt(strokeColorInput.opacityInput.value, 10) / 100;
    var strokeWidth = parseInt(strokeColorInput.widthInput.value, 10);
    var fill = {
      enabled: fillColorInput.enabled,
      color: fillColor,
      opacity: fillOpacity,
    };
    var stroke = {
      enabled: strokeColorInput.enabled,
      color: strokeColor,
      opacity: strokeOpacity,
      width: strokeWidth,
    };
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-grid",
          countX,
          countY,
          fill,
          stroke,
          gap,
          size,
          shape,
        },
      },
      "*"
    );
  });

  cancelButton.addEventListener("click", () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  });
}
