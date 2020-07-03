const { Router } = require('express');
const { isAuthenticated } = require('../helpers/auth');
const {
  renderNotes,
  renderNotesAddForm,
  addNote,
  renderEditNoteForm,
  editNote,
  deleteNote,
} = require('../controllers/notes.controller');

const router = Router();

// Protected routes

// router.use((req, res, next) => {
//   isAuthenticated(req, res, next);
//   next();
// });
router.use(isAuthenticated);

router.get('/', renderNotes);

router.get('/add', renderNotesAddForm);
router.post('/add', addNote);

router.get('/edit/:id', renderEditNoteForm);
router.put('/edit/:id', editNote);

router.delete('/delete/:id', deleteNote);

module.exports = router;
