// Import plugin
const feedsPlugin = require('eleventy-plugin-feeds');
const { stripHtml } = require('eleventy-plugin-wipdeveloper-tools/src/');

module.exports = function (eleventyConfig) {
  /*
    ## Set up example
    Copy bellow 
  */
  eleventyConfig.addPlugin(feedsPlugin, {
    // source directory for your project.  Used to copy template into the `dirForFeeds`
    src: __dirname + `/src/`,
    // Name of collection to add to feed
    collectionName: 'episode',
    // directory that will hold the templates for the feeds.
    // dirForFeeds: 'feeds-plugin-test',
    // Full site url without a trailing slash.
    siteUrl: `https://test-podcast.netlify.app`,
    // Site title
    siteTitle: 'Test Podcast Site',
    // Site description
    siteDescription: 'Fake site description for test rss ',
    // Language
    language: 'en',
    // Full Url to site image
    siteImage: `https://test-podcast.netlify.app/full/path/to/image.png`,
    // Full Favicon path
    favicon: 'https://test-podcast.netlify.app/favicon.ico',
    // Copyright info
    copyright: `All rights reserved ${new Date().getFullYear()}, Just Some Apps LLC`,
    // Categories
    categories: ['test', 'Podcast'],
    // Author Name
    authorName: 'Brett Nelson',
    // Author Email
    authorEmail: 'brett@wipdeveloper.com',
    // Author URl
    authorUrl: `https://test-podcast.netlify.app/`,
    // Featured image meta tag from each post
    // imagePropertyName: 'featuredImage',

    feedOptions: {
      // Full site url without a trailing slash.
      siteUrl: `https://test-podcast.netlify.app`,
      // Site title
      siteTitle: 'Test Podcast Site',
      // Site description
      siteDescription: 'Fake site description for test rss ',
      // Language
      language: 'en',
      // Full Url to site image
      siteImage: `https://test-podcast.netlify.app/full/path/to/image.png`,
      // Full Favicon path
      favicon: 'https://test-podcast.netlify.app/favicon.ico',
      // Copyright info
      copyright: `All rights reserved ${new Date().getFullYear()}, Just Some Apps LLC`,
      // Categories
      categories: ['test', 'Podcast'],
      // Author Name
      authorName: 'Brett Nelson',
      // Author Email
      authorEmail: 'brett@wipdeveloper.com',
      // Author URl
      authorUrl: `https://test-podcast.netlify.app/`,
      // Featured image meta tag from each post
      //   imagePropertyName: 'featuredImage',
    },
    feedItemMapper: function (itemFromCollection) {
      return {
        title: itemFromCollection.data.title,
        description: stripHtml(itemFromCollection.templateContent).substring(
          0,
          200
        ),
        url: `https://test-podcast.netlify.app${itemFromCollection.url}`, // link to the item
        categories: itemFromCollection.data.tags, // optional - array of item categories
        date: itemFromCollection.data.date, // any format that js Date can parse.
        content: itemFromCollection.templateContent, // optional string Long html content for the episode

        enclosure: {
          url: `https://test-podcast.netlify.app${itemFromCollection.data.audio}`,
          //   file: `https://test-podcast.netlify.app${itemFromCollection.data.audio}`,
        }, // optional enclosure
      };
    },
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
