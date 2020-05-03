/**
 * skylark-texts-json - The skylarkjs json utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./json","./stringify"],function(n,e){"use strict";return n.decycle=function(n,t){var o=new WeakMap;return function n(r,i){var c,f;return void 0!==t&&(r=t(r)),"object"!=typeof r||null===r||r instanceof Boolean||r instanceof Date||r instanceof Number||r instanceof RegExp||r instanceof String?r:void 0!==(c=o.get(r))?{$ref:c}:(o.set(r,i),Array.isArray(r)?(f=[],r.forEach(function(e,t){f[t]=n(e,i+"["+t+"]")})):(f={},Object.keys(r).forEach(function(t){f[t]=n(r[t],i+"["+e(t)+"]")})),f)}(n,"$")}});
//# sourceMappingURL=sourcemaps/decycle.js.map
