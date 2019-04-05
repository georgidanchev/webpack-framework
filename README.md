# webpack-framework (setup)

This is the latest and greatest setup you can utilize in the web world -- webpack, all of the big websites use it! It can automate a lot of tasks meaningless but necessary tasks and save you a huge amount tons of time allowing you to focus on what matters!

This setup features two different development methods; production and development, each of these is highly optimized for their task. Production has all the bells and whistles you'd expect any good website development too to utilize like; magnification of all files, auto-prefixing, babel poly-fill and babel transpiling es6 to es5 for older browser, and much more!

## Workflow

When you download the repo you have to run **npm install**  in the root folder of the project to download all of the latest npm packages. Then you will be ready to run the build-in hello world app. In the same terminal, run **npm run build**, this will build the hello world app and will populate the dist folder with all the necessary files. From there you can either view with by opening the **index.html** or by opening it with your live server plugin. This will be the finished product, in the development method we have our own live-server, but it's nice to see what you will get at the end. 

To view the project in the development method, in that previous terminal, run **npm run dev** this will run the project within the webpack-live server. You will notice that there are no new assets in the dist folder, and that assets in the dist folder aren't modified as you work on them. This is because the live-server is configured to keep all the assets in memory by default, for better deficiency and speed of development.

I won't go too deep into explaining each particular file, I am not here to write an essay, I will keep it short. All you need to modify is in the **source folder (src)**.  In that folder you have your **assets** folder where you keep all of your assets images, svgs, icons or whatever else you might have as assets. After that you have the **styles** folder, in which you keep all of your scss files, they are all imported in the **style.scss**. There are some sample mixins and code that you can see checkout there. You will also notice that we import **normalize-scss**, if you do not yet know what this is research it, it's awesome! 

Then you have the **scripts** folder this is very interesting folder, in this folder you will keep all of your scripts, you can have sub-folders if you like. The beauty of this setup is that you can use any sort of JS code that you want. You can write with es5, or es6, or es6 with modules, you can write it with IFFES. The idea is that the framework empowers **you** as developer to be a better developer. The one catch with this is that you still have to have the code as module or module-ish, and import it in the main.js - this the entry point of webpack for javascript. If you are a total beginner you can even write your code straight in there, but you will be missing the the es6 module awesomeness. 

This about covers everything that is most important for developing using this setup, I have included this sample hello world project in it so that you can see how it works, and if there is something that's confusing you, you should be able to figure out how it works. If you have any questions don't be afraid to reach out to my on my social media accounts, search my github username.

## Features

### Production Mode - for best reliability
* **HTML Minification** - removes spaces, comments for better performance.
* **JS Minification** - removes spaces, comments for better performance.
* **CSS Prefixing** - allows newer css properties to work on older browsers
* **Babel Transpile** - converts es6 syntax back to es5 for older browsers.
* **Babel Polyfill** - makes the new es6 function to work on older browsers.
* **Assets Cache Busting**  - prevents website from loading outdated assets.
* **Scripts Cache Busting** - prevents website from loading outdated scripts.
* **Auto File Cleaning** - for no duplication in dist when you remove/modify files
* **No Source Map** - no JS debugging => higher performance

### Development Mode - best development performance
* **Webpack Live Server with auto open** - self-explanatory 
* **Eval Source Map for JS Debugging** - allows you to see your exact code in the debugging dev tool of your browser including exact line numbers.
* **No Babel Transpile** - For high refresh speed and code clarity.
* **No Minification** - For high refresh speed and code clarity.
* **No CSS Prefixing** - for high refresh speed and code clarity. 
* **No Cache Busting** - For high refresh speed.

### Extras
* **Separate Vendor and Site Logic** - if you use bootstrap or jquery you can keep that in a separate file so that you don't have to overwrite whole js files that don't need to change every time you make a change. I guess this would make a difference only on huge websites, but it's nice to be in there.
* **Tweaked Airbnb ESlint** - This helps you keep your code the same across your whole project. Some people don't like to get errors which are not real errors as they develop, I've tweaked it so that you only get warnings, and some are disabled. To auto fix these you can use the eslint plugin in your text editor or run terminal command - google it.
* **Normalize-scss** - browsers come with standard css that changes some elements, this is horrible when you want your site to look the same across all browsers. This small npm package helps mitigate this by a huge margin.
* **SASS Loader** - as a serious dev you probably are using sass, so the project comes built-in scss loader with it. If you don't know sass features, you can still just use css in those files, they will work all the same.

## Commands Overview
* **npm install** - used to install all packages.
* **npm run dev** - used to run development mode.
* **npm run build** - used to run production mode.


## ESLINT

Run **npm i -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react** to install eslint, the import plugin and the airbnb presets for JS, JSX and React. This command will install all of these things in your global folder, so you won't see them in this project, if you want to keep those within the project, change the command where it says **-g** to **--save-dev** this will save it for this project only. For me, it makes it easier, as I use easlint across all of my projects.

## NPM packages used
* [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
* [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill)
* [@babel/core](https://www.npmjs.com/package/@babel/core)
* [webpack](https://www.npmjs.com/package/webpack)
* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
* [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
* [webpack-merge](https://www.npmjs.com/package/webpack-merge)
* [babel-loader](https://www.npmjs.com/package/babel-loader)
* [autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [file-loader](https://www.npmjs.com/package/file-loader)
* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
* [html-loader](https://www.npmjs.com/package/html-loader)
* [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
* [style-loader](https://www.npmjs.com/package/style-loader)
* [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
* [postcss-loader](https://www.npmjs.com/package/postcss-loader)
* [node-sass](https://www.npmjs.com/package/node-sass)
* [sass-loader](https://www.npmjs.com/package/sass-loader)
* [css-loader](https://www.npmjs.com/package/css-loader)
* [normalize-scss](https://www.npmjs.com/package/normalize-scss)


