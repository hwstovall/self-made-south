import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Posts</h1>

      {
        data.allGhostPost.edges.map(({ node }) => {
          return <div>{node.title}</div>;
        })
      }
    </Layout>
  )
};

export const query = graphql`
  query {
    allGhostPost {
      edges {
        node {
          id
          title
          slug
          html
        }
      }
    }
  }
`;

export default IndexPage;
