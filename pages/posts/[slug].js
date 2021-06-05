import PostContent from '../../components/posts/post-detail/post-content'
import {getPostData} from '../../lib/posts-util'

const PostDetailPage = (props) => {
  return <>
    <PostContent posts={props.post}/>
  </>;
};

export default PostDetailPage;
// Slug is a human readable sentence
// with dashes and all

export async function getStaticPaths(context){
  return{
    paths: [],
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
