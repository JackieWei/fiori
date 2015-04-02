lib/uglifyjs (include parse-js, process, consolidator)
1.compress javascript sources

lib/clean-css
1.clean css


lib/core
1. execute Command function
2.common functions (heper)
3.log
4.constants
5.env
6.walk folder


lib/less
1.lessc all less files

lib/cleancss
1.minify css files

build (target folder:ui)
1.remove all none debug javascript files to make sure all are new
2.build all javascript source(debug) files to none-debug,minified js
3.compile all less files to css file
4.minify css files

package (target folder:ui/ushell)
1.walk all debug javascript files infomation
2.generate json dependencies
3.generate xml depenecies 
4.generate all in one debug file
5.generate all in one final file
6.generate preload json

