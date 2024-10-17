const express = require('express');

const { addNote, removeNote, getNotes } = require('../controllers/controller');

const router = express.Router();

// note routes
router.post('/add-note', addNote);
router.delete('/remove-note/:id', removeNote);
router.get('/get-notes', getNotes);

module.exports = router;
