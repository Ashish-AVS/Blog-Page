import React from "react";
import ReactMarkdown from 'react-markdown'

import PostHeader from "./post-header";
import classes from './post-content.module.css'

const DUMMY_POST = {
  slug: "Getting-started-with-nextjs",
  title: "Getting started with nextjs",
  image: "/images/max.png",
  date: "2022-02-10",
  content: "# This is a first post",
};
export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
