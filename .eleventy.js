const tybaltPlugin = require('@tybalt/eleventy-plugin');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./css');
    eleventyConfig.addPlugin(tybaltPlugin, {
        pattern: './components/**/*.component.ts',
    });

    return {
        passthroughFileCopy: true,
    };
};