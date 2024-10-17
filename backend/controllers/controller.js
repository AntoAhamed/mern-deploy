const Note = require('../models/Note');
const dotenv = require('dotenv');

dotenv.config();

exports.addNote = async (req, res) => {
    const { title, desc } = req.body;

    try {
        const note = await Note.create({ title: title, description: desc });

        if (note) {
            res.status(201).json({ message: 'ok' });
        } else {
            res.status(400).json({ message: 'something went wrong' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeNote = async (req, res) => {
    const id = req.params.id;

    try {
        await Note.deleteOne({ _id: id });

        res.status(201).json({ message: 'ok' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        if (notes) {
            res.json({ notes });
        } else {
            res.status(400).json({ message: 'something went wrong' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
