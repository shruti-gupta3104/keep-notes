import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';

import api from "../lib/axois"
import NotesNotFound from '../components/NotesNotFound';
const HomePage = () => {
  
const [notes,setNotes] = useState([]);
const [loading, setLoading] = useState(true);
 const fetchNotes = async()=>{
    try {
      const res = await api.get("/notes");
      console.log(res.data);
      setNotes(res.data);

    } catch (error) {
      console.log("Error in fetching notes", error);
      toast.error("failed to fetch the notes");
      
    }finally{setLoading(false);}
  };
useEffect(()=>{
 
  fetchNotes();
},[])
  return (
    <div className='min-h-screen'>
      
      <Navbar />
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading notes....</div>}
      {notes.length === 0 && <NotesNotFound />}
        {notes.length>0 && (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note)=>(
            <NoteCard key={note._id} note={note} setNotes={setNotes}/>
          ))}

        </div>)}
      </div>
    </div>
  )
}

export default HomePage
