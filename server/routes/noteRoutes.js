const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const auth = require("../middleware/auth");

router.post("/notes", auth, async(requestAnimationFrame, res, next) => {
    try {
        const { title, content } = req.body;

        const note = new Note({
            title,
            content,
            userId: req.userId,    
        });

        await note.save();

        res.json(note);

    } catch (error) {
        res.status(500).json({ message: "Error Creating Note" });
    }
});

module.exports = router;