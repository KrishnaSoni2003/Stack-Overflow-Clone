import React, {useEffect} from 'react'
import {Container, Grid, Grow} from '@mui/material'
import {useDispatch } from 'react-redux'

import './Connect.css';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Posts from './Posts'
import Forms from './Forms'
import {getPosts} from '../../actions/posts'

const Connect = () => {
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className="home-container-2">
        <Grow in style={{marginTop: "100px"}}>
          <Container>
            <Grid container justify='space-between' alignItems='stretch' spacing='3'>
              <Grid>
                <Posts/>
              </Grid>
              <Grid>
                <Forms/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
        {/* <div className='tags-h1'>
        <Posts/>
        <Forms/>
        </div> */}
      </div>
    </div>
  )
}

export default Connect
