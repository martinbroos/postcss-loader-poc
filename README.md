# postcss-loader-poc
Used for demonstrating issue: https://github.com/webpack-contrib/postcss-loader/issues/488

Reproduce by:

1. npm install
2. npm run start
3. terminal now show a warning from autoprefixer that postcss.config.js file contains a browser key
4. that postcss file can be found in the plugin draft-js-inline-toolbar-plugin which is imported in src/app.js
