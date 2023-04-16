import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../actions/posts'

const Post = ({ post , setCurrentId}) => {

  const dispatch=useDispatch();

  return (
    <Card>
        <CardMedia image={post.selectedFile} title={post.title}/>
        <div>
          <Typography variant='h6'>{post.creator}</Typography>
          <Typography variant='body2'>{moment(post.creator).fromNow()}</Typography>
        </div>
        <div>
          <button style={{color: 'white'}} size='small' onClick={()=>setCurrentId(post.id)}>
            <MoreHorizIcon fontSize='default'/>
          </button>
        </div>
        <div>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} ` )}</Typography>
        </div>
        <Typography variant='h5' gutterBottom>{post.title}</Typography>
        <CardContent>
        <Typography variant='h5' gutterBottom>{post.message}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={() => {}}>
            <ThumbUpAltIcon fontSize='small'/>
            Like
            {post.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={() => dispatch(deletePost(post.id)) }>
            <DeleteIcon fontSize='small'/>
            Delete
          </Button>
        </CardActions>
    </Card>
  )
}

export default Post
