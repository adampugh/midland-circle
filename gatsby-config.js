module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    // allows gatsby v1 to use react v16
    `gatsby-plugin-react-next`
  ],
}
