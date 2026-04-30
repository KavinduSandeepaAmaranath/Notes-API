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

module.exports = router;