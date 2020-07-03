const Note = require('../models/Note');

const renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ createdAt: 'desc' })
    .lean();
  res.render('notes/list', { notes });
};

const renderNotesAddForm = (req, res) => {
  res.render('notes/add-form');
};

const addNote = async (req, res) => {
  const { title, description } = req.body;
  const note = new Note({ title, description });
  note.user = req.user.id;
  await note.save();
  req.flash('success_msg', 'Note added successfully');
  res.redirect('/notes');
};

const renderEditNoteForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();

  // TODO: move to a function
  if (note.user !== req.user.id) {
    req.flash('error_msg', 'Not authorized!');
    return res.redirect('/notes');
  }

  res.render('notes/edit-form', { note });
};

const editNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash('success_msg', 'Note updated succesfully');
  res.redirect('/notes');
};

const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Note deleted successfully');
  res.redirect('/notes');
};

module.exports = {
  renderNotes,
  renderNotesAddForm,
  addNote,
  renderEditNoteForm,
  editNote,
  deleteNote,
};
