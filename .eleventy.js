// Plugins
const pluginRev = require("eleventy-plugin-rev");
const eleventySass = require("eleventy-sass");

// Filters
const jsMinifier = require("./src/_eleventy/filters/minify-javascript.js");
const artisanToString = require("./src/_eleventy/filters/artisan-to-string.js");
const dateFormatter = require("./src/_eleventy/filters/date-format.js");

// Shortcodes
const fileNameToTitle = require("./src/_eleventy/shortcodes/filename-to-title.js");
const schemaData = require("./src/_eleventy/shortcodes/structured-data.js");
const lastModified = require("./src/_eleventy/shortcodes/lastModified.js");

// Utilities
const sassOptions = require("./src/_eleventy/utilities/sass-options.js");
const minifyProduction = require("./src/_eleventy/utilities/minify-html.js");
const serviceWorkerData = require("./src/_eleventy/utilities/serviceWorkerData.js");


module.exports = function(eleventyConfig) {

  ////////////////////////////////////////////////////
  // Pass Throughs
  ////////////////////////////////////////////////////

  ['src/img', 'src/server', {'src/js/packages': 'js/packages/'}, {"src/fonts": "fonts"}].forEach(filesFromPath =>
    eleventyConfig.addPassthroughCopy(filesFromPath)
  );
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('manifest.webmanifest');
  eleventyConfig.addPassthroughCopy('src/all-artisan-data');
  eleventyConfig.addPassthroughCopy('artisans-service-worker-min.js');


  ////////////////////////////////////////////////////
  // Plugins
  ////////////////////////////////////////////////////

  // revision the css filename
  eleventyConfig.addPlugin(pluginRev);

  // let eleventy handle compiling sass
  eleventyConfig.addPlugin(eleventySass, sassOptions);

  ////////////////////////////////////////////////////
  // Filters
  ////////////////////////////////////////////////////

  // minify inline js codes on the fly
  eleventyConfig.addNunjucksAsyncFilter("jsmin", jsMinifier);
  
  // artisan object for detail page
  eleventyConfig.addFilter("stringFromArtisanObject", artisanToString);

  // date formatter...duh
  eleventyConfig.addFilter("dateFormat", dateFormatter);

  ////////////////////////////////////////////////////
  // Shortcodes
  ////////////////////////////////////////////////////

  eleventyConfig.addShortcode("nametotitle", fileNameToTitle);

  // json-ld data creation
  eleventyConfig.addShortcode("schemaDataShortCode", schemaData);

  // find the last modified file info to publish as 'updated' in schema data and sitemap
  eleventyConfig.addShortcode("lastModifiedSchemaShortCode", lastModified);
  
  ////////////////////////////////////////////////////
  // Utilities
  ////////////////////////////////////////////////////

  // minify html for production build
  eleventyConfig.addTransform("htmlmin", minifyProduction);

  //create json file for service worker
  eleventyConfig.on('eleventy.after', serviceWorkerData);


  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};