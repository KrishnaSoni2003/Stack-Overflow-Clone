import { Paper, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPosts } from '../../actions/posts'

const Forms = () => {

const [postData,setPostData] = useState({
  creator:'',
  title:'',
  message:'',
  tags:'',
  selectedFile:''
})

const dispatch=useDispatch();

const handleSubmit= (e) => {
  e.preventDefault();
  dispatch(createPosts(postData));
}

const clear = () => {

}
  return (
    <Paper>
        <form onSubmit={handleSubmit}>
          <Typography varient="h6">
            EXPERIENCES
            </Typography>
            <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" 
            fullWidth
            value={postData.creator}
            onChange={(e) => setPostData({...postData, creator: e.target.value})}
             />
             <TextField name="title" variant="outlined" label="title" fullWidthvalue={postData.title}onChange={(e) => setPostData({...postData, title: e.target.value})}/>
             <TextField name="message" variant="outlined" label="message" fullWidthvalue={postData.message}onChange={(e) => setPostData({...postData, message: e.target.value})}/>
             <TextField name="tags" variant="outlined" label="tags" fullWidthvalue={postData.tags}onChange={(e) => setPostData({...postData, tags: e.target.value})}/> 
             <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({base64}) => setPostData({...postData,selectedFile: base64 })}
              />
              <button variant="contained" color='primary' size='large' type='submit' fullWidth>Submit</button>
              <button variant="contained" color='secondary' size='small' onClick={clear} fullWidth>Clear</button> 
             </div>
        </form>
    </Paper>
  )
}

export default Forms
