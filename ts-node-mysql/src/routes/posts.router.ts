import { Router } from 'express';
import {
  getPosts,
  createPost,
  getPost,
  editPost,
  deletePost,
} from '../controllers/posts.controller';

const router = Router();

router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPost).put(editPost).delete(deletePost);

export default router;
