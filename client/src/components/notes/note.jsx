import { Button, Divider } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../notes/notes.css"
import DoneIcon from '@mui/icons-material/Done'
import NoteCreator from './noteCreator';
import NoteCard from './noteCrad';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { getAllFromStore } from '/src/idbHelper.js';
import { useSelector } from 'react-redux';
const Notes = () => {
  const courseBranch=["All courses","DataScience","Webdevelopment","Bussiness"]
  const [activeIndex,setActiveIndex]=useState(0)
  const [showDropdown, setShowDropdown] = useState(false);
  const [noteCreator,setNoteCreator]=useState(false)
  const [notes,setNotes]=useState([])
    const listRef = useRef(null);
  const [searchQuery,setSearchQuery]=useState('')
  const [showSuggestions,setShowSuggestions]=useState(false)
  const [previewQuery, setPreviewQuery] = useState('');

    const loggedUser=useSelector((state)=>state.user.loggedUD) 

  useEffect(()=>{
    const fetchNotes=async ()=>{
      const allNotes=await getAllFromStore("notes");
      setNotes(allNotes)
    }
    fetchNotes();
  },[])
  
  const filteredNotes =
    activeIndex === 0
      ? notes
      : notes.filter((note) => note.Branch === courseBranch[activeIndex]);

  const searchFilter= (note =>
            note.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.Describtion.toLowerCase().includes(searchQuery.toLowerCase())
          )

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, [filteredNotes]);
  const handleIndex=(index)=>{
    setActiveIndex(index)
  }
  const handleClose=()=>{setNoteCreator(false)}
  
  const handleFocus=()=>{
    setShowSuggestions(true)
  }

  const handleBlur=()=>{
    setShowSuggestions(false)
    setPreviewQuery(''); 
  }

  const handleNoteCreate=()=>{
    if(loggedUser.userRole === 'teacher'){
      setNoteCreator(true)
    } else{
      alert("Only teacher can create note.")
    }
  }
  return (
    <div className='w-[95%] max-w-[1260px] flex flex-col mb-10 bg-gray-50'>
      <div className="flex items-center justify-between">
        <div><h1>Notes</h1>
        <h2>Create, organize, and share your study notes</h2></div>
        <div><Button onClick={handleNoteCreate}>Create Note</Button></div>
      </div>
      <nav className='flex-col md:flex-row bg-white p-2 my-8 flex gap-10 justify-between rounded-xl'>
        <div className='w-full'> 
          <p>Search notes</p>
          <input 
              value={previewQuery || searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='sInput w-full border-1 outline-0 p-3 rounded-2xl border-blue-100' type="text" placeholder='Search by title or content' 
          />
          {showSuggestions && searchQuery &&(
          <div className="absolute mt-2 ml-20 p-2 w-[250px] z-10 h-auto bg-black text-white rounded-md">
            <span className="absolute top-[-10px] left-5 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black"></span>
            <div>
                {filteredNotes.filter(searchFilter).slice(0, 5).map((item, ind) => (
                  <p
                    key={ind}
                    onMouseEnter={() => setPreviewQuery(item.Title)}
                    onMouseLeave={() => setPreviewQuery('')}
                    onMouseDown={() => {
                      setSearchQuery(item.Title);
                      setShowSuggestions(false);
                      setPreviewQuery('');
                    }}
                    className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded"
                  >
                    {item.Title}
                  </p>
                ))}
            </div>
          
          </div>
        )}
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
        </div>
      </nav>
      <div className='flex flex-col pl-2 flex-wrap md:flex-row gap-3'ref={listRef}>
        {filteredNotes.filter(searchFilter).length > 0 ? 
          filteredNotes.filter(searchFilter).map((note, index) => (
            <NoteCard key={index} note={note} />
          )
        ):
        (
          <div className='flex w-full flex-col h-[60vh] gap-2 items-center justify-center'>
            <TextSnippetIcon sx={{fontSize:"50px"}}/>
            <h1>No notes found</h1>
            <p>Try asjusting your search or filter criteria</p>
            <button className='bg-blue-500 flex gap-1 rounded-md p-2'><ControlPointIcon /><span>Create Your First Note</span></button>
          </div>
        )
        }
      </div>
      {noteCreator && <NoteCreator noteCreator={noteCreator} handleClose={handleClose}/>}
    </div>
  )
}

export default Notes