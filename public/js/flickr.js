(function () {
  var container = document.querySelector(".photo-row[data-flickr-feed]");
  if (!container) {
    return;
  }

  var feed = container.getAttribute("data-flickr-feed");
  if (!feed) {
    return;
  }

  var limitValue = container.getAttribute("data-flickr-limit") || "6";
  var limit = parseInt(limitValue, 10);
  if (!Number.isFinite(limit) || limit < 1) {
    limit = 6;
  }

  function setMessage(message) {
    container.innerHTML = '<p class="muted">' + message + "</p>";
  }

  function buildFeedUrl(baseUrl, callbackName) {
    var url = baseUrl;

    if (url.indexOf("format=json") === -1) {
      url += (url.indexOf("?") === -1 ? "?" : "&") + "format=json";
    }

    if (url.indexOf("jsoncallback=") !== -1) {
      url = url.replace(/jsoncallback=[^&]+/, "jsoncallback=" + callbackName);
    } else if (url.indexOf("nojsoncallback=1") !== -1) {
      url = url.replace("nojsoncallback=1", "jsoncallback=" + callbackName);
    } else {
      url += (url.indexOf("?") === -1 ? "?" : "&") + "jsoncallback=" + callbackName;
    }

    return url;
  }

  var callbackName = "jsonFlickrFeed";
  var previousCallback = window[callbackName];
  var script = document.createElement("script");
  var timeoutId = window.setTimeout(function () {
    cleanup();
    setMessage("Photos are unavailable right now.");
  }, 8000);

  function cleanup() {
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
    if (window[callbackName]) {
      if (previousCallback) {
        window[callbackName] = previousCallback;
      } else {
        delete window[callbackName];
      }
    }
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  window[callbackName] = function (data) {
    cleanup();

    if (!data || !Array.isArray(data.items)) {
      setMessage("Photos are unavailable right now.");
      return;
    }

    var items = data.items.slice(0, limit);
    if (!items.length) {
      setMessage("No photos yet.");
      return;
    }

    container.innerHTML = "";
    items.forEach(function (item) {
      var link = item.link || "#";
      var title = item.title || "Flickr photo";
      var src = item.media && item.media.m ? item.media.m : "";
      if (!src) {
        return;
      }

      var thumb = src.replace("_m.", "_q.");
      var anchor = document.createElement("a");
      anchor.className = "photo-thumb";
      anchor.href = link;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.setAttribute("aria-label", title);

      var img = document.createElement("img");
      img.loading = "lazy";
      img.alt = title;
      img.src = thumb;

      anchor.appendChild(img);
      container.appendChild(anchor);
    });

    if (!container.children.length) {
      setMessage("No photos yet.");
    }
  };

  script.src = buildFeedUrl(feed, callbackName);
  script.onerror = function () {
    cleanup();
    setMessage("Photos are unavailable right now.");
  };
  document.head.appendChild(script);
})();
