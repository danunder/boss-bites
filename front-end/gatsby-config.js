module.exports = {
    plugins: [
        {
    resolve: `gatsby-source-shopify`,
    options: {
      // The domain name of your Shopify shop.
      shopName: `BOSSBITES`,
      // The storefront access token
      accessToken: `aa4b9696ed83deebf840668e65d23913`,
    },
  },

    ]
}