import * as React from 'react';
import { GhostPost } from '../graphql-types';

interface PostPreviewProps {
  readonly post: GhostPost;
}

export const PostPreview = ({ post }: PostPreviewProps) => (
  <article className="preview">
    <a href={`/posts/${post.slug}/`}>
      <h2>{post.title}</h2>
    </a>
    <div className="body">
      {post.feature_image ? <img className="featured-image" src={post.feature_image} alt={post.title} /> : null}
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.custom_excerpt }} />
    </div>
  </article>
);
