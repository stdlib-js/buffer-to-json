// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=r,s=t;var a=function(r){var t,a;if(!e(r))throw new TypeError(s("invalid argument. Must provide a Buffer. Value: `%s`.",r));for((t={}).type="Buffer",t.data=[],a=0;a<r.length;a++)t.data.push(r[a]);return t};export{a as default};
//# sourceMappingURL=index.mjs.map
