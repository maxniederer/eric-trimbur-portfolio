const { DateTime } = require("luxon");

const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItDefList = require("markdown-it-deflist");

const timeToRead = require('eleventy-plugin-time-to-read');
const htmlmin = require("html-minifier-terser");

const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

const pluginTOCN = require("eleventy-plugin-nesting-toc");
const embedEverything = require("eleventy-plugin-embed-everything");
const { seconds } = require("eleventy-plugin-time-to-read/components/options-default");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "jpeg"],
		widths: [800],
    // failOnError: false,
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {},
      fallback: "largest"
		},
	});

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
    ignoredElements: ["a"],
    wrapper: "nav",
  });

  eleventyConfig.addPlugin(timeToRead, {
    style: 'short',
  });
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });
      return minified;
    }
    return content;
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
