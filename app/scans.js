GM_define(
  ['lib/post', 'lib/cdata', 'lib/log'],
  function(post, cdata, log) {
    log.debug("GM [scans.js] activated");

    // URL where HTTP POST will be sent
    var submitURL = "https://sosko.in.rs/pa/";
    // parameters to send in body ([SCAN] is replaced with scan data)
    var bodyParams = "parse=1&parsing=[SCAN]";

    // shorthand function
    var id = function(id) { return document.getElementById(id); };

    return function(document) {
      var scan = id('scan');
      if (scan) {
        log.info("GM [scans.js] #scan found, sending data");
        var text = encodeURIComponent(cdata(scan));
        post(submitURL, bodyParams.replace('[SCAN]', text), function(response){
          log.info("GM [scans.js] sending complete, response received, status: "+response.status);
        });
      }
    };
  }
);
