import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress} from '@mui/material'

const Posts = () => {

const posts = useSelector((state) => state.posts);
console.log(posts);
  return (
    // !posts.length ? <CircularProgress/> : (
    //   <Grid container alignItems='stretch' spacing='3'>
    //     {posts.map((post) => {
    //       <Grid></Grid>
    //     })}
    //   </Grid>
    // )
    <h1>hi</h1>
  )
}

export default Posts
