const express = require("express");
const Note = require("../models/note");

const router = express.Router();

// GET all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch notes" });
  }
});

// POST a new note
router.post("/", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newNote = new Note({
    title,
    content,
  });

  try {
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ message: "Failed to save the note" });
  }
});

module.exports = router;
