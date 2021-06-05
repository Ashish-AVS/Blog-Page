import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
const DUMMY_POSTS = [
  {
    slug: "Getting-started-with-nextjs",
    title: "Getting started with nextjs",
    image: "/images/max.png",
    excerpt: "Getting started with nextjs Getting started with nextjs",
    date: "2022-02-10",
  },
  {
    slug: "1Getting-started-with-nextjs",
    title: "Getting started with nextjs",
    image: "/images/max.png",
    excerpt: "Getting started with nextjs Getting started with nextjs",
    date: "2022-02-10",
  },
  {
    slug: "2Getting-started-with-nextjs",
    title: "Getting started with nextjs",
    image: "/images/max.png",
    excerpt: "Getting started with nextjs Getting started with nextjs",
    date: "2022-02-10",
  },
  {
    slug: "3Getting-started-with-nextjs",
    title: "Getting started with nextjs",
    image: "/images/max.png",
    excerpt: "Getting started with nextjs Getting started with nextjs",
    date: "2022-02-10",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={props.posts} />
    </>
  );
};


export async function getStaticProps() {
  const myFeaturedPosts = getFeaturedPosts();
  console.log(myFeaturedPosts);
  return {
    props: {
      posts: myFeaturedPosts,
    },
  };
}
export default HomePage;
