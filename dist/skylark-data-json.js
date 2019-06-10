/**
 * skylark-data-json - The skylarkjs json utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var e=n.define,o=n.require,t="function"==typeof e&&e.amd,s=!t&&"undefined"!=typeof exports;if(!t&&!e){var a={};e=n.define=function(r,n,e){"function"==typeof e?(a[r]={factory:e,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var e=n.split("/"),o=r.split("/");e.pop();for(var t=0;t<o.length;t++)"."!=o[t]&&(".."==o[t]?e.pop():e.push(o[t]));return e.join("/")}(n,r)}),resolved:!1,exports:null},o(r)):a[r]={factory:null,resolved:!0,exports:e}},o=n.require=function(r){if(!a.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var e=a[r];if(!e.resolved){var t=[];e.deps.forEach(function(r){t.push(o(r))}),e.exports=e.factory.apply(n,t)||null,e.resolved=!0}return e.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,n){r("skylark-data-json/json",["skylark-langx/skylark"],function(r){return r.json={}}),r("skylark-data-json/main",["./json"],function(r){return r}),r("skylark-data-json",["skylark-data-json/main"],function(r){return r})}(e),!t){var i=o("skylark-langx/skylark");s?module.exports=i:n.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-data-json.js.map
