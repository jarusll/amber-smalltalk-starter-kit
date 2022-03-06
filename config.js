/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "amber/es6-promise": "node_modules/es6-promise/dist/es6-promise",
    "tingle": "node_modules/tingle.js/dist/tingle",
    "require-css": "node_modules/require-css",
    "mousetrap": "node_modules/mousetrap/mousetrap",
    "typeahead": "node_modules/typeahead.js/dist/typeahead.jquery",
    "helios/showdown": "node_modules/showdown/src/showdown",
    "requireJS": "node_modules/requirejs/require",
    "jquery": "node_modules/jquery/dist/jquery",
    "jquery-ui": "node_modules/jquery-ui-dist/jquery-ui",
    "helios/es6-promise/auto": "node_modules/es6-promise/dist/es6-promise.auto",
    "codemirror": "node_modules/codemirror",
    "bootstrap": "node_modules/bootstrap/dist",
    "silk": "node_modules/@ambers/silk/src",
    "amber": "node_modules/@ambers/lang/base",
    "amber/core": "node_modules/@ambers/lang/src",
    "amber-ide-starter-dialog": "node_modules/@ambers/ide-starter-modal/lib/idestarter",
    "helios": "node_modules/@ambers/helios/src",
    "helios/resources": "node_modules/@ambers/helios/resources",
    "helios/app": "node_modules/@ambers/helios/app",
    "helios/polyfills": "node_modules/@ambers/helios/polyfills",
    "helios/index": "node_modules/@ambers/helios/index",
    "amber/web": "node_modules/@ambers/contrib-web/src",
    "domite": "node_modules/@ambers/domite/src",
    "amber/legacy": "node_modules/@ambers/contrib-legacy/src",
    "amber/legacy/resources": "node_modules/@ambers/contrib-legacy/resources",
    "amber/jquery": "node_modules/@ambers/contrib-jquery/src",
    "amber-starter": "src"
  },
  "map": {
    "*": {
      "css": "require-css/css",
      "amber_core": "amber/core"
    }
  },
  "shim": {
    "typeahead": {
      "deps": [
        "jquery"
      ],
      "exports": "jQuery.fn.typeahead"
    },
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!codemirror/lib/codemirror"
      ]
    },
    "bootstrap/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap/css/bootstrap"
      ]
    }
  }
});