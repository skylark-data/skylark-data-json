/**
 * skylark-utils-json - The skylarkjs json utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var o=n.define,t=n.require,e="function"==typeof o&&o.amd,s=!e&&"undefined"!=typeof exports;if(!e&&!o){var i={};o=n.define=function(r,n,o){"function"==typeof o?(i[r]={factory:o,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var o=n.split("/"),t=r.split("/");o.pop();for(var e=0;e<t.length;e++)"."!=t[e]&&(".."==t[e]?o.pop():o.push(t[e]));return o.join("/")}(n,r)}),exports:null},t(r)):i[r]=o},t=n.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var o=i[r];if(!o.exports){var e=[];o.deps.forEach(function(r){e.push(t(r))}),o.exports=o.factory.apply(n,e)}return o.exports}}if(!o)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,n){r("skylark-langx/skylark",[],function(){return{}}),r("skylark-utils-json/json",["skylark-langx/skylark"],function(r){return r.json={}}),r("skylark-utils-json/main",["./json"],function(r){return r}),r("skylark-utils-json",["skylark-utils-json/main"],function(r){return r})}(o),!e){var u=t("skylark-langx/skylark");s?module.exports=u:n.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-utils-json-all.js.map
