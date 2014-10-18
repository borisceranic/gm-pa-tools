GM_define(
  [],
  function() {
    return {
      debug: function(message) {
        console.log(message);
	  },
      info: function(message) {
        console.info(message);
	  },
      warn: function(message) {
        console.warn(message);
	  },
      error: function(message) {
        console.error(message);
	  }
    };
  }
);
