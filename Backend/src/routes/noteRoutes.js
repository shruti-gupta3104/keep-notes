import express from "express";
import { getAllNotes, createNote , deleteNote
    ,updateNote,getNoteById

} from "../controllers/notesControllers.js"

const router = express.Router();
console.log("Error here");

router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.get("/", getAllNotes);
router.delete("/:id", deleteNote);
router.post("/", createNote);



export default router;