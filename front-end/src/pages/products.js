import React from "react";
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'

const ProductsPage = ({ data }) => (
  <Layout>
    <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyID}>
          <h3>
            <Link to={`/product/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRange.minVariantPrice.amount}
          </h3>
          <p>{node.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default ProductsPage;

export const query = graphql`
  {
    allShopifyProduct(sort: {fields: title}) {
      edges {
        node {
          title
          images {
            originalSrc
          }
          shopifyId
          handle
          description
          availableForSale
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
 