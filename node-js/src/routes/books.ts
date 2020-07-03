import { Router } from 'express';
import { index, addForm, addBook } from '../controllers/booksController';

const router: Router = Router();

router.get('/', index);
router.get('/add', addForm);
router.post('/add', addBook);

export default router;
