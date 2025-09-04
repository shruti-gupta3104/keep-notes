import Note from '../Models/Note.js';

export async function getAllNotes( _,res){
    try {
        const notes = await Note.find().sort({createdAt : -1}) ;// -1 means in desc order
        res.status(200).json(notes);

        
    } catch (error) {
        console.error("Error occured in getAllNotes", error)
        res.status(500).json({message : "Internal server error"});
    }
}
export async function getNoteById(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message : "Note not found"});
        }
        res.status(200).json(note);
    } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
    }
}
export async function createNote(req,res){
 try {
    const {title, content} = req.body;
    if(!title || !content){
        return res.status(400).json({message : "Title and content are required"});
    }
    const note = new Note({title, content});
    const saveNote = await note.save();

    // const note = await Note.create({title, content});
    res.status(201).json(saveNote);

 } catch (error) {
      console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
 }
}

export async function deleteNote(req,res){
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote){
            return res.status(404).json({message : "Note not found"});
        }
        res.status(200).json({
            sucess : true,
            message : "Note deleted successfully"});
    } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateNote(req,res){
     try {
        const {title, content} = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id,{title, content}, {new : true});
        if(!updateNote){
            return res.status(404).json({message : "Note not found"});
        }
        res.status(200).json(updateNote);
    } catch (error) {
    console.error("Error in update controller", error);
    res.status(500).json({ message: "Internal server error in update controller" });
    }
}