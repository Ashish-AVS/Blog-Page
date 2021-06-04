// Has util functions used to extract posts data
import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = file.replace(/\.md$/, ""); // removes the file extension
  const postData = {
    slug: postSlug,
    data,
    content,
  };
  return postData;
};
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory); // read a dir
  const postData = postFiles.map((postFile) => getPostData(postFile));
  const sortedPostData = postData.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPostData;
};

export const getFeaturedPosts = () => {
    return getAllPosts().filter(post => post.isFeatured)
}
