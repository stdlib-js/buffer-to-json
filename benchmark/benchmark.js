/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var allocUnsafe = require( '@stdlib/buffer-alloc-unsafe' );
var pkg = require( './../package.json' ).name;
var toJSON = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var buf;
	var o;
	var i;

	buf = allocUnsafe( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf[ 0 ] = i % 256;
		o = toJSON( buf );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var buf;
	var o;
	var i;

	buf = allocUnsafe( 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf[ 0 ] = i % 256;
		o = buf.toJSON();
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::large', function benchmark( b ) {
	var buf;
	var o;
	var i;

	buf = allocUnsafe( 1e6 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf[ 0 ] = i % 256;
		o = toJSON( buf );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in,large', function benchmark( b ) {
	var buf;
	var o;
	var i;

	buf = allocUnsafe( 1e6 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf[ 0 ] = i % 256;
		o = buf.toJSON();
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
