// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){var s,i;if(!t(e))throw new TypeError(r("invalid argument. Must provide a Buffer. Value: `%s`.",e));for((s={}).type="Buffer",s.data=[],i=0;i<e.length;i++)s.data.push(e[i]);return s}export{e as default};
//# sourceMappingURL=index.mjs.map
