IFrame Live Coding Widget
=================

This is an embedded live coding widget built to support UD292 (Canvas 2D). The widget currently embeds no third-party libraries but this might change in the future.

###How to Build

You must have Node.js, NPM, and Bower installed.

* Run `bower install` to grab the required dependencies.
* Run `grunt --serve` to run the app locally. Vulcanize will make
  build.html and build.js files for you.

###Install

Grab the following files/directories and put them on your server.

* images/
* build.html
* build.js
* styles.css
* bower_components/
* stubs.json

###Run

After installing the files to your server, you can prepopulate any of
the starter code stubs by navigating to
http(s)://hostpath/file.html?exercise=<stub name>

###Adding more templates

Add them to the stubs.json file as a named array of lines.
