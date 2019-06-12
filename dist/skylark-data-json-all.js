/**
 * skylark-data-json - The skylarkjs json utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var t=n.define,e=n.require,o="function"==typeof t&&t.amd,a=!o&&"undefined"!=typeof exports;if(!o&&!t){var s={};t=n.define=function(r,n,t){"function"==typeof t?(s[r]={factory:t,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var t=n.split("/"),e=r.split("/");t.pop();for(var o=0;o<e.length;o++)"."!=e[o]&&(".."==e[o]?t.pop():t.push(e[o]));return t.join("/")}(n,r)}),resolved:!1,exports:null},e(r)):s[r]={factory:null,resolved:!0,exports:t}},e=n.require=function(r){if(!s.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var t=s[r];if(!t.resolved){var o=[];t.deps.forEach(function(r){o.push(e(r))}),t.exports=t.factory.apply(n,o)||null,t.resolved=!0}return t.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,n){r("skylark-langx/_attach",[],function(){return function(r,n,t){"string"==typeof n&&(n=n.split("."));for(var e=n.length,o=r,a=0,s=n[a++];a<e;)o=o[s]=o[s]||{},s=n[a++];return o[s]=t}}),r("skylark-langx/skylark",["./_attach"],function(r){var n={attach:function(t,e){return r(n,t,e)}};return n}),r("skylark-data-json/json",["skylark-langx/skylark"],function(r){return r.attach("data.json",{})}),r("skylark-data-json/main",["./json"],function(r){return r}),r("skylark-data-json",["skylark-data-json/main"],function(r){return r})}(t),!o){var i=e("skylark-langx/skylark");a?module.exports=i:n.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-data-json-all.js.map
