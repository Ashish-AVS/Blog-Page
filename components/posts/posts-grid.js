import React from 'react'

import PostItem from './posts-item';
import classes from './posts-grid.module.css';
export default function PostsGrid({posts}) {
    return (
        <ul className={classes.grid}>
            {posts.map(post => <PostItem key={post.slug} post={post}/>)}
        </ul>
    )
}
