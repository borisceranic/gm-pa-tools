GM_define(
  [],
  function() {
    return function(url, data, onload) {
      GM_xmlhttpRequest({
        method: "POST",
        url: url,
        data: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        onload: onload
      });
    };
  }
);
