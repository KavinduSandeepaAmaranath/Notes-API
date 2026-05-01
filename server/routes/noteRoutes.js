const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const auth = require("../middleware/auth");

router.post("/notes", auth, async (req, res, next) => {
    try {
        const { title, content } = req.body;

        const note = new Note({
            title,
            content,
            userId: req.user.id,    
        });

        await note.save();

        res.json(note);

    } catch (error) {
        res.status(500).json({ message: "Error Creating Note" });
    }
});

router.get("/notes", auth, async (req, res) => {
    try {
        const notes = await Note.find({
            userId: req.user.id,
        });

        res.json(notes);
        
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes" });
    }
});

router.put("/notes/:id", auth, async (req, res) => {
    try {
        const { title, content} = req.body;

        //1. Find note by ID
        const note = await Note.findById(req.params.id);

        //2. Check if note exists
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        //3. Check ownership
        if (note.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }

        //4. Update fields (only id provided)
        if (title) note.title = title;
        if (content) note.content = content;

        //5. Save updated note
        await note.save();

        res.json(note);

    } catch (error) {
        res.status(500).json({ message: "Error updating note" });
    }
});

module.exports = router;