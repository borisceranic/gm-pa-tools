// ==UserScript==
// @name        Planetarion tools
// @namespace   duskodugousko.patools
// @description Planetarion tools for integration with other game tools
// @version     2.0.0
// @downloadURL https://sosko.in.rs/pa/patools.user.js
// @include     https://sosko.in.rs/*
// @include     http://game.planetarion.com/*
// @include     http://beta.planetarion.com/*
// @include     http://146.185.135.215/*
// @include     http://37.139.27.239/*
// @grant       GM_xmlhttpRequest
// ==/UserScript==

console.log('GM [patools] Start of script');

// script that will be loaded each time
var scriptUrl = 'https://sosko.in.rs/pa/script.js';

// function definitions
var asyncGet = function (url)
{
  var promise = new Promise(function (resolve, reject)
  {
    GM_xmlhttpRequest({
      method: 'GET',
      url: url,
      timeout: 30000,
      onload: function (res)
      {
        if (res.status >= 200 && res.status < 300)
        {
          resolve(res);
        }
        else
        {
          var error = new Error(res);
          error.name = 'OnLoadError';
          error.message = 'custom message on load';
          console.warn(error);
          reject(error);
        }
      },
      ontimeout: function (res)
      {
        var error = new Error(res);
        error.name = 'OnTimeoutError';
        error.message = 'CustomMessageText on timeout';
        console.warn(error);
        reject(error);
      },
      onerror: function ()
      {
        var error = new Error(res);
        error.name = 'OnErrorError';
        error.message = 'CustomMessageText on error';
        console.warn(error);
        reject(error);
      }
    });
  });
  return promise;
};
var loadFromSource = function (moduleSource)
{
  var module = null;
  console.log('GM [patools] loadFromSource: evaluating "' + moduleSource + '"');
  // evaluate the module source
  try {
    module = eval(moduleSource);
  }
  catch (error)
  {
    console.error('GM [patools] loadFromSource: eval failed: ' + error.message);
    return null;
  }
  return module;
};

// fetch the script and execute it
var cacheBurst = '?v=' + (new Date()).getTime();
asyncGet(scriptUrl + cacheBurst).then(function (res) {
  console.log('GM [patools] obtained source');
  jsFunction = loadFromSource(res.responseText);

  // prepare function for execution
  console.log('GM [patools] running loaded function');
  funcExec = jsFunction(document);
  console.log('GM [patools] function executed, returned: '+ funcExec);
}, function (error) {
  console.error(error);
});

console.log('GM [patools] End of script');
