import * as React from "react"

import { graphql } from "gatsby"
import { PostTemplateQuery } from '../graphql-types';

import Layout from '../components/layout';

const Post = ({ data }: { data: PostTemplateQuery }) => {
  const post = data.ghostPost;

  return (
    <Layout>
      <article className="post">
        <h1>{post.title}</h1>
        {
          post.feature_image
            ? <img src={post.feature_image} alt={post.title} />
            : null
        }
        <p>Tags: {post.tags.map((t) => <span key={t.id}>{t.name}</span>)}</p>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query PostTemplate ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      title
      slug
      feature_image
      html
      tags {
        id
        name
      }
    }
  }
`;
