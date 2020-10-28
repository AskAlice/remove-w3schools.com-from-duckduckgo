// ==UserScript==
// @name         Remove w3schools.com from duckduckgo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://duckduckgo.com/?q=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#links').addEventListener('DOMSubtreeModified',()=>{
        document.querySelectorAll("div[data-domain$='w3schools.com']").forEach((t)=>{
            t.remove()})
    });
})();
