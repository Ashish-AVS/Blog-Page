import React from 'react'
import Grid from '@material-ui/core/Grid';

import PostItem from './posts-item';
import classes from './posts-grid.module.css';
export default function PostsGrid({posts}) {
    return (
        <Grid container spacing={3}>
        {/* <ul className={classes.grid}> */}
            {posts.map(post => <PostItem key={post.slug} post={post}/>)}
        {/* </ul> */}
        </Grid>
    )
}
