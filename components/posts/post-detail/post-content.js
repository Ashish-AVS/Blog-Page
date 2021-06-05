import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

export default function PostContent({ posts }) {
  const imagePath = `/images/posts/${posts.slug}/${posts.image}`;
  return (
    <article className={classes.content}>
      <Container maxWidth="md">
        <PostHeader title={posts.title} image={imagePath} />
        <Typography variant="body1" gutterBottom>
          <div className={classes.blogContent}><ReactMarkdown>{posts.content}</ReactMarkdown></div>
        </Typography>
      </Container>
    </article>
  );
}
{
  /* <article className={classes.content}>
      <PostHeader title={posts.title} image={imagePath} />
      <ReactMarkdown>{posts.content}</ReactMarkdown>
    </article> */
}
