(function(){

  // URL where HTTP POST will be sent
  var submitURL = "https://sosko.in.rs/pa/";

  // parameters to send in body ([SCAN] is replaced with scan data)
  var bodyParams = "parse=1&parsing=[SCAN]";

  var log = {
    debug: function(message) { console.log(message); },
    info: function(message) { console.info(message); },
    warn: function(message) { console.warn(message); },
    error: function(message) { console.error(message); }
  };

  log.debug("GM [patools/script] activated");

  // remote post
  var post = function(url, data, onload) {
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

  // cdata extraction
  var cdata = function self(elem) {
    var str = '',
        children = elem.childNodes;
    for (var i = 0; i < children.length; i++) {
      var node = children[i];
      if (node.nodeType == 3) {
        str += node.nodeValue;
      }
      else if (node.nodeType == 1 && node.childNodes.length) {
        str += self(node);
      }
      str += ' ';
    }
    return str;
  };

  // shorthand function
  var id = function(id) { return document.getElementById(id); };

  return function(document) {
    var scan = id('scan');
    if (scan) {
      log.info("GM [patools/script] #scan found, sending data");
      var text = encodeURIComponent(cdata(scan));
      post(submitURL, bodyParams.replace('[SCAN]', text), function(response){
        log.info("GM [patools/script] sending complete, response received, status: " + response.status);
      });
    }
  };
})();
