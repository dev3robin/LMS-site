import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../notes/notes.css"
import DoneIcon from '@mui/icons-material/Done'
import NoteCreator from './noteCreator';
import NoteCard from './noteCrad';
import { getAllNotes } from '/src/idbHelper.js';
const Notes = () => {
  const courseBranch=["All courses","DataScience","Webdevelopment","Bussiness"]
  const [activeIndex,setActiveIndex]=useState(0)
  const [showDropdown, setShowDropdown] = useState(false);
  const [noteCreator,setNoteCreator]=useState(false)
  const [notes,setNotes]=useState([])

  useEffect(()=>{
    const fetchNotes=async ()=>{
      const allNotes=await getAllNotes();
      setNotes(allNotes)
    }
    fetchNotes();
  },[])

  const handleIndex=(index)=>{
    setActiveIndex(index)
  }
  const handleClose=()=>{setNoteCreator(false)}
  return (
    <div className='w-[95%] max-w-[1260px] flex flex-col bg-gray-50'>
      <div className="flex items-center justify-between">
        <div><h1>Notes</h1>
        <h2>Create, organize, and share your study notes</h2></div>
        <div><Button onClick={()=>{setNoteCreator(true)}}>Create Note</Button></div>
      </div>
      <nav className='notenav bg-white my-8 flex gap-10 justify-between rounded-xl'>
        <div className='w-full'> 
          <p>Search notes</p>
          <input className='w-full border-1 outline-0 p-3 rounded-2xl border-blue-100' type="text" placeholder='Search by title or content' />
        </div>
        <div>
          <p>Filter by Course</p>
          <div className='dropDown'>
            <div className='dropBtn'><button onClick={() => setShowDropdown(!showDropdown)}>{courseBranch[activeIndex]}<KeyboardArrowDownIcon /></button></div>
            {showDropdown && (
              <ul className='dropList'>
                {courseBranch.map((item, index) => (
                  <li
                    key={index}
                    tabIndex="0"
                    onClick={() => {
                      handleIndex(index);
                      setShowDropdown(false);
                    }}
                  >
                    <DoneIcon
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        paddingRight: '5px',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {notes.map((note,index)=>{
            return (
              <NoteCard note={note}/>
            )
          })}
        </div>
      </nav>
      {noteCreator && <NoteCreator noteCreator={noteCreator} handleClose={handleClose}/>}
    </div>
  )
}

export default Notes