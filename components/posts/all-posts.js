import React from 'react';
import classes from './all-posts.module.css'
import PostsGrid from './posts-grid'
import HeroPost from './HeroPost'
export default function AllPosts(props) {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <HeroPost post={props.posts}/>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}
