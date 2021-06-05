import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

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
  return {
    props: {
      posts: myFeaturedPosts,
    },
  };
}
export default HomePage;
