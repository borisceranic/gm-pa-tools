GM_define(
  ['lib/post', 'lib/cdata'],
  function(post, cdata) {

    // URL where HTTP POST will be sent
    var submitURL = "https://sosko.in.rs/pa/";
    // parameters to send in body ([SCAN] is replaced with scan data)
    var bodyParams = "parse=1&parsing=[SCAN]";

    var id = function(id) { return document.getElementById(id); };
    return function(document) {
      var scan = id('scan');
      if (scan) {
        console.info("GM SCANS: #scan found, sending data...");
        var text = encodeURIComponent(cdata(scan));
        post(submitURL, bodyParams.replace('[SCAN]', text), function(response){
          console.log("GM SCANS: sending complete, response received, status: "+response.status);
        });
      }
    };
  }
);
