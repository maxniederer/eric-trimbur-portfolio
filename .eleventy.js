const { DateTime } = require("luxon");

const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItDefList = require("markdown-it-deflist");

const pluginTOCN = require("eleventy-plugin-nesting-toc");
const embedEverything = require("eleventy-plugin-embed-everything");

module.exports = function (eleventyConfig) {
  // Markdown
  // eleventyConfig.setLibrary(
  //   "md",
  //   markdownIt({ html: true })
  //     .use(markdownItAnchor, {
  //     permalink: markdownItAnchor.permalink.linkAfterHeader({
  //       style: "visually-hidden",
  //       assistiveText: (title) => `Permalink to “${title}”`,
  //       visuallyHiddenClass: "visually-hidden",
  //       space: false,
  //       // placement: "after",
  //       wrapper: ['<div class="heading-wrapper">', "</div>"],
  //     }),
  //   })
  // );

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownLib = markdownIt(markdownItOptions)
    .use(markdownItAttrs, {
      allowedAttributes: ['id', 'class', /^regex.*$/]
    })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        style: "aria-label",
        assistiveText: (title) => `Permalink to “${title}”`,
      })
    })
    .use(markdownItDefList);
  eleventyConfig.setLibrary("md", markdownLib);


  //table of contents, nested
  eleventyConfig.addPlugin(pluginTOCN, {
    tags: ["h2", "h3", "h4", "h5", "h6"],
    wrapper: "div",
  });

  //embeds
  eleventyConfig.addPlugin(embedEverything);

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // custom sorting filter
  function sortByOrder(values) {
    let vals = [...values];
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }
  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
