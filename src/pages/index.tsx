import * as React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { AllPostsQueryQuery, GhostPost } from '../graphql-types';
import { PostPreview } from '../components/post-preview';

const IndexPage = ({ data }: { readonly data: AllPostsQueryQuery }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {data.allGhostPost.edges.map(({ node }) => <PostPreview key={node.id} post={node as GhostPost} />)}
    </Layout>
  )
};

export const query = graphql`
  query AllPostsQuery {
    allGhostPost(sort: {fields: [created_at]}) {
      edges {
        node {
          id
          title
          slug
          html
          excerpt
          custom_excerpt
          feature_image
        }
      }
    }
  }
`;

export default IndexPage;
