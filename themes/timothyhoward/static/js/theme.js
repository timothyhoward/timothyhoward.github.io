(function () {
  var root = document.documentElement;
  var style = getComputedStyle(root);
  var lockTint = style.getPropertyValue("--accent-tint-locked").trim();
  var lockSoft = style.getPropertyValue("--accent-tint-soft-locked").trim();
  if (lockTint === "1" && lockSoft === "1") {
    return;
  }

  var accent = style.getPropertyValue("--accent").trim();
  if (!accent) {
    return;
  }

  var ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.fillStyle = "#000";
  ctx.fillStyle = accent;
  var value = ctx.fillStyle;
  var r;
  var g;
  var b;

  if (value.charAt(0) === "#") {
    var hex = value.slice(1);
    if (hex.length === 3) {
      r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
      g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
      b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
  } else if (value.indexOf("rgb") === 0) {
    var match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      r = parseInt(match[1], 10);
      g = parseInt(match[2], 10);
      b = parseInt(match[3], 10);
    }
  }

  if (typeof r !== "number" || typeof g !== "number" || typeof b !== "number") {
    return;
  }

  if (lockTint !== "1") {
    root.style.setProperty("--accent-tint", "rgba(" + r + ", " + g + ", " + b + ", 0.12)");
  }

  if (lockSoft !== "1") {
    root.style.setProperty("--accent-tint-soft", "rgba(" + r + ", " + g + ", " + b + ", 0.04)");
  }
})();
