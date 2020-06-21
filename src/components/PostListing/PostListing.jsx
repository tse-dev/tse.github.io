import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        pageType: postEdge.node.frontmatter.pageType,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        <h1>PostListing.jsx</h1>
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h1>{post.title} - {post.pageType}</h1>
          </Link>
        ))
}
      </div>
    );
  }
}

export default PostListing;
