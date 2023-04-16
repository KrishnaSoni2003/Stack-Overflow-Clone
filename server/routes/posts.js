import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/getPosts', getPosts);
router.post('/createPosts', createPost);
router.patch('/:id', updatePost)
router.delete('/deletePost', deletePost)

export default router;