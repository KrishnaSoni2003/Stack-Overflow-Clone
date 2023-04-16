import { Paper, TextField, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import { useDispatch,  useSelector } from 'react-redux'
import { createPosts, updatePosts } from '../../actions/posts'

const Forms = ({currentId, setCurrentId}) => {

const [postData,setPostData] = useState({
  creator:'',
  title:'',
  message:'',
  tags:'',
  selectedFile:''
})

const post = useSelector((state) => currentId ? state.postsReducer.find((p) => p.id === currentId) : null);

const dispatch=useDispatch();

useEffect(() => {
  if(post) setPostData(post);
},[post])

const handleSubmit= (e) => {
  e.preventDefault();

  if(currentId){
    dispatch(updatePosts(currentId, postData));
    clear();
  }
  else{
    dispatch(createPosts(postData));
    clear();
  }
}

const clear = () => {
  setCurrentId(0);
  setPostData({creator:'',
  title:'',
  message:'',
  tags:'',
  selectedFile:''})
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
             <TextField name="title" variant="outlined" label="title" fullwidthvalue={postData.title}onChange={(e) => setPostData({...postData, title: e.target.value})}/>
             <TextField name="message" variant="outlined" label="message" fullwidthvalue={postData.message}onChange={(e) => setPostData({...postData, message: e.target.value})}/>
             <TextField name="tags" variant="outlined" label="tags" fullwidthvalue={postData.tags}onChange={(e) => setPostData({...postData, tags: e.target.value})}/> 
             <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({base64}) => setPostData({...postData,selectedFile: base64 })}
              />
              <button variant="contained" color='primary' size='large' type='submit' fullwidth>Submit</button>
              <button variant="contained" color='secondary' size='small' onClick={clear} fullwidth>Clear</button> 
             </div>
        </form>
    </Paper>
  )
}

export default Forms
