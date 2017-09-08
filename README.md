# Gulp AngularJs 1.5  Boilerplate 

Simple AngularJS Boilerplate with SASS support and Gulp watch/build tasks

# Features
* SASS support 
* Minimal CSS styling 
* Gulp watch, build and local server tasks
* clear folder structure
* minified CSS and JS build files

## Folder structure

app
	-services
	-app.config.js
	-app.js
bower_components
json
node_modules
style
	-style.css
	-style.scss
css
	-style.min.css
js
	-nonangularlibs.js
	-angularlibs.js
	-appcomponents.js	
bower.json
gulpfile.json
index.html
package.json


## 1. Setup (Install gulp and bower components)
```bash
npm install
```

## 2. Watch files
```bash
gulp
```

## 3. Build minified files (js and css folders in root)
```bash
gulp build
```

