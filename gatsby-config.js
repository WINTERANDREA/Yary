const path = require("path");
const {
  title,
  keywords,
  description,
  author,
  defaultLang,
  trackingId,
  image,
  siteUrl,
} = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    keywords,
    description,
    author,
    image,
    siteUrl,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "NccTaxiMilano",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#fed136",
        display: "minimal-ui",
        icon: "content/assets/logo-icon-square.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-background-image",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: [path.resolve(__dirname, "src/style")],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ncctaximilano.com",
        sitemap: "https://www.example.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Montserrat",
            variants: [400, 700],
          },
          {
            family: "Kaushan+Script",
          },
          {
            family: "Droid+Serif",
            variants: [400, 700, "400italic", "700italic"],
          },
          {
            family: "Roboto+Slab",
            variants: [400, 100, 300, 700],
          },
          {
            family: "Cardo",
            variants: [400, 700],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
  ],
};
