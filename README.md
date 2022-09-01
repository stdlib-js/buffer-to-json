<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# toJSON

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [JSON][json] representation of a [Buffer][@stdlib/buffer/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import toJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-to-json@esm/index.mjs';
```

#### toJSON( buffer )

Returns a [JSON][json] representation of a [`Buffer`][@stdlib/buffer/ctor].

```javascript
import array2buffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-array@esm/index.mjs';

var buf = array2buffer( [ 1, 2 ] );

var json = toJSON( buf );
/* returns
    {
        'type': 'Buffer',
        'data': [ 1, 2 ]
    }
*/
```

For guidance on reviving a JSON-serialized [`Buffer`][@stdlib/buffer/ctor], see [`reviver()`][@stdlib/buffer/reviver].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import allocUnsafe from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@esm/index.mjs';
import randint from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import toJSON from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-to-json@esm/index.mjs';

var buf;
var i;

buf = allocUnsafe( 100 );
for ( i = 0; i < buf.length; i++ ) {
    buf[ i ] = randint( 0, 255 );
}

console.log( toJSON( buf ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/to-json`][@stdlib/array/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a typed array.</span>
-   <span class="package-name">[`@stdlib/buffer/reviver`][@stdlib/buffer/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized Buffer.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/buffer-to-json.svg
[npm-url]: https://npmjs.org/package/@stdlib/buffer-to-json

[test-image]: https://github.com/stdlib-js/buffer-to-json/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/buffer-to-json/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/buffer-to-json/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/buffer-to-json?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/buffer-to-json.svg
[dependencies-url]: https://david-dm.org/stdlib-js/buffer-to-json/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/buffer-to-json/tree/deno
[umd-url]: https://github.com/stdlib-js/buffer-to-json/tree/umd
[esm-url]: https://github.com/stdlib-js/buffer-to-json/tree/esm
[branches-url]: https://github.com/stdlib-js/buffer-to-json/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/buffer-to-json/main/LICENSE

[json]: http://www.json.org/

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor/tree/esm

<!-- <related-links> -->

[@stdlib/array/to-json]: https://github.com/stdlib-js/array-to-json/tree/esm

[@stdlib/buffer/reviver]: https://github.com/stdlib-js/buffer-reviver/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
