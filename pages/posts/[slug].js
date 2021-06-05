import PostContent from '../../components/posts/post-detail/post-content'
import {getPostData, getPostsFiles} from '../../lib/posts-util'

const PostDetailPage = (props) => {
  return <>
    <PostContent posts={props.post}/>
  </>;
};

export default PostDetailPage;
// Slug is a human readable sentence
// with dashes and all

export async function getStaticPaths(context){
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))
  return{
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: 'blocking'
  }
}

export async function getStaticProps(context){
  const {params} = context;
  const {slug} = params;
  const postData = getPostData(slug);
  return{
    props:{
      post: postData
    },
    revalidate: 600
  }
}
