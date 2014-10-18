GM_define(
  ['lib/post', 'lib/cdata'],
  function(post, cdata) {
    var id = function(id) { return document.getElementById(id); };
    return function(document) {
      var scan = id('scan');
      if (scan) {
        console.info("GM SCANS: #scan found, sending data...");
        var text = encodeURIComponent(cdata(scan));
        post("https://sosko.in.rs/pa/", "parse=1&parsing="+text, function(response){
          console.log("GM SCANS: sending complete, response received, status: "+response.status);
        });
      }
    };
  }
);
