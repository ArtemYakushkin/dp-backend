import express from 'express';
import { createPost, deletePost, getPost, likePost, updatePost, timelinePost } from '../controllers/postControllers.js';

const router = express.Router();

// create post
router.post('/', createPost);
// update post
router.put('/:id', updatePost);
// delete post
router.delete('/:id', deletePost);
// like/dislike a post
router.put('/:id/like', likePost);
// get post
router.get('/:id', getPost);
// get timeline post
router.get('/timeline/all', timelinePost);


export default router;