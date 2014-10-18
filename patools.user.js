// ==UserScript==
// @name        Planetarion tools
// @namespace   duskodugousko.patools
// @description Planetarion tools for integration with other game tools
// @version     1.0.0
// @downloadURL https://sosko.in.rs/pa/patools.user.js
// @include     https://sosko.in.rs/*
// @include     http://game.planetarion.com/*
// @include     http://beta.planetarion.com/*
// @include     http://146.185.135.215/*
// @include     http://37.139.27.239/*
// @grant       GM_xmlhttpRequest
// @require     https://sosko.in.rs/pa/gm_require/gm_require.js
// ==/UserScript==

GM_require.config({
  baseUrl: "https://sosko.in.rs/pa/app/",
  debug:true
});
(GM_require('scans'))(document);
(GM_require('misc'))(document);
