import AllPosts from "../../components/posts/all-posts";

const AllPostsPage = () => {

    const DUMMY_POSTS = [
        {
          slug: "Getting-started-with-nextjs",
          title: "Getting started with nextjs",
          image: "/images/max.png",
          excerpt: "Getting started with nextjs Getting started with nextjs",
          date: "2022-02-10"
        },
        {
          slug: "1Getting-started-with-nextjs",
          title: "Getting started with nextjs",
          image: "/images/max.png",
          excerpt: "Getting started with nextjs Getting started with nextjs",
          date: "2022-02-10"
        },
        {
          slug: "2Getting-started-with-nextjs",
          title: "Getting started with nextjs",
          image: "/images/max.png",
          excerpt: "Getting started with nextjs Getting started with nextjs",
          date: "2022-02-10"
        },
        {
          slug: "3Getting-started-with-nextjs",
          title: "Getting started with nextjs",
          image: "/images/max.png",
          excerpt: "Getting started with nextjs Getting started with nextjs",
          date: "2022-02-10"
        }
      ];
  return (
    <>
      <AllPosts posts={DUMMY_POSTS}/>
    </>
  );
};

export default AllPostsPage;
