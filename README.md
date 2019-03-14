# webpack framework


Small summary of the setup
<br/><br/>

## Features

### Production Mode (best reliability)
* HTML Minification
* JS Minification
* CSS Prefixing
* Babel Transpile
* Babel Polyfill 
* Assets Cache Busting
* Scripts Cache Busting
* Auto File Cleaning
* No Source Map

### Development Mode (best performance)
* Webpack Live Server with auto open
* Auto File Cleaning - no duplicates in src
* Eval Source Map for JS Debugging
* No Babel Transpile
* No Cache Busting
* No Minification 
* No Prefixing

### Extras
* Seprate Vendor and Site Logic 
* Tweaked Airbnb ESlint
* Normalize-scss
* SASS Loader
<br/><br/>

# How to setup

## Commands 
* npm install - used to install all packages
* npm run dev - used to run development mode
* npm run build - used to run production mode

## Workflow

You work under dev, once work is done and you are ready to push to your server or your git repo with a hook then use the build command which will build a production ready software with just one command.

