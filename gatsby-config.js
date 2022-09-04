module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Gatsby Blog Site`,
  },
  plugins: [

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,
  ],
}
