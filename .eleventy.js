const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginTOC = require("eleventy-plugin-toc");

module.exports = function (eleventyConfig) {
  // Markdown
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true }).use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkAfterHeader({
        style: "visually-hidden",
        assistiveText: (title) => `Permalink to “${title}”`,
        visuallyHiddenClass: "visually-hidden",
        space: false,
        // placement: "after",
        wrapper: ['<div class="heading-wrapper">', "</div>"],
      }),
    })
  );

  //table of contents
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3"],
    wrapper: "div",
  });

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("src/assets");

  // custom sorting filter
  function sortByOrder(values) {
    let vals = [...values];
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }
  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
