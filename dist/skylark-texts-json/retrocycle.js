/**
 * skylark-texts-json - The skylarkjs json utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./json"],function(json){"use strict";function retrocycle($){var px=/^\$(?:\[(?:\d+|"(?:[^\\"\u0000-\u001f]|\\(?:[\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*")\])*$/;return function rez(value){value&&"object"==typeof value&&(Array.isArray(value)?value.forEach(function(element,i){if("object"==typeof element&&null!==element){var path=element.$ref;"string"==typeof path&&px.test(path)?value[i]=eval(path):rez(element)}}):Object.keys(value).forEach(function(name){var item=value[name];if("object"==typeof item&&null!==item){var path=item.$ref;"string"==typeof path&&px.test(path)?value[name]=eval(path):rez(item)}}))}($),$}return json.retrocycle=retrocycle});
//# sourceMappingURL=sourcemaps/retrocycle.js.map
