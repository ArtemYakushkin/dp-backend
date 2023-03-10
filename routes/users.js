import express from 'express';
import { deleteUser, followUser, unfollowUser, getUser, updateUser } from '../controllers/userControllers.js';

const router = express.Router();

// update user
router.put('/:id', updateUser);
// delete user
router.delete('/:id', deleteUser);
// get user
router.get('/:id', getUser);
// follow a user
router.put('/:id/follow', followUser);
// unfollow a user
router.put('/:id/unfollow', unfollowUser);

export default router;