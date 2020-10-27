// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Talos",
  icon: {
    favicon: "./src/assets/favicon.png",
    touchicon: "./src/assets/favicon.png",
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://talos.dev",
  settings: {
    title: "Kubernetes OS",
    description: "An operating system for Kubernetes",
    web: process.env.URL_WEB || false,
    twitter: "https://twitter.com/talossystems",
    github: "https://github.com/talos-systems/talos",
    nav: {
      links: [{ path: "/docs/v0.6/", title: "Docs" }],
    },
    dropdownOptions: [
      {
        version: "v0.7",
        url: "/docs/v0.7/",
        latest: false,
        prerelease: true,
      },
      {
        version: "v0.6",
        url: "/docs/v0.6/",
        latest: true,
        prerelease: false,
      },
    ],
  },

  // Allow '.' in slugs (e.g. /docs/v0.1).
  permalinks: {
    slugify: {
      use: "slugify",
      options: { lower: true },
    },
  },

  plugins: [
    {
      use: "gridsome-source-docs",
      options: {
        baseDir: "./content/docs",
        path: "**/*.md",
        typeName: "MarkdownPage",
        pathPrefix: "/docs",
        sidebarOrder: {
          "v0.6": [
            { title: "Introduction", method: "weighted" },
            { title: "Bare Metal Platforms", method: "alphabetical" },
            { title: "Virtualized Platforms", method: "alphabetical" },
            { title: "Cloud Platforms", method: "alphabetical" },
            { title: "Local Platforms", method: "alphabetical" },
            { title: "Guides", method: "alphabetical" },
            { title: "Reference", method: "alphabetical" },
            { title: "Learn More", method: "weighted" },
          ],
          "v0.7": [
            { title: "Introduction", method: "weighted" },
            { title: "Bare Metal Platforms", method: "alphabetical" },
            { title: "Virtualized Platforms", method: "alphabetical" },
            { title: "Cloud Platforms", method: "alphabetical" },
            { title: "Local Platforms", method: "alphabetical" },
            { title: "Guides", method: "alphabetical" },
            { title: "Reference", method: "alphabetical" },
            { title: "Learn More", method: "weighted" },
          ],
        },
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },

    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
      },
    },

    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : "XX-999999999-9",
      },
    },

    {
      use: "@gridsome/plugin-sitemap",
      options: {},
    },
  ],
};
