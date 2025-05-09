import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { saveNote } from '/src/idbHelper.js';



const NoteCreator = ({noteCreator,handleClose}) => {
  const courseBranch=["DataScience","Webdevelopment","Bussiness"]
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeIndex,setActiveIndex]=useState(0)

    const [title,setTitle]=useState('')
    const [type,setType]=useState('Private')
    const [branch,setBranch]=useState('DataScience')
    const [describtion,setDescribtion]=useState('')
    const [file,setFile]=useState('')

    const handleIndex=(index)=>{
      setActiveIndex(index)
    }
    const handleTitle=(e)=>{
      setTitle(e.target.value)
    }
    const handleType = (e) => {
      setType(e.target.checked ? 'Public' : 'Private');
    };

    const handleBranch=(index)=>{
      setBranch(courseBranch[index])
    }
    const handleDescribtion=(e)=>{
      setDescribtion(e.target.value)
    }
    const handleFile=(e)=>{
      setFile(e.target.files[0])
    }
const addNote = async () => {
  const note = {
    id: title+Date.now(),
    Title: title,
    Type: type,
    Branch: branch,
    Describtion: describtion,
    File: file,
    Date: Date.now()
  };
  await saveNote(note);
  console.log(note)
};



  return (
    <Dialog open={noteCreator}>
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col w-full max-w-[660px] px-7 gap-2.5 bg-white rounded-xl">
        <div className='flex items-center justify-between gap-5 '>
          <div className='flex flex-col gap-2 mt-4'>
            <h1 id="added-to-cart-title">
              Create a note
            </h1>
            <p>Add a new note for your studies. You can choose to share it publicly or keep it private.</p>
          </div>
          <div className='flex align-top place-items-start'>
            <button className='hover:bg-red-500 rounded-4xl'
            onClick={()=>handleClose()}>
              <CloseIcon /></button>
          </div>
        </div>
        <h2>Title</h2>
        <div
            tabIndex={0}
            className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300"
          > 
          <input 
            onChange={(e)=>handleTitle(e)}
            value={title}
            className='w-full outline-0 border-1 border-gray-300 p-2 rounded-xl' type="text" placeholder='Note title' />
        </div>
        <h2>Related Course</h2>
        <div className='w-full relative'>
          <div
              tabIndex={0}
              className="p-[2px] rounded-2xl border-2 border-transparent focus-within:border-gray-300"
            >        
            <button 
              onClick={()=>setShowDropdown(true)}
              className='w-full flex justify-between items-center border-1 border-gray-300 p-2 rounded-xl '>
              <span>{courseBranch[activeIndex]}</span>
              <span><KeyboardArrowDownIcon /></span>
            </button>
          </div>
          {showDropdown && (
              <ul className='absolute bg-white border-1
               border-gray-200 w-[300px]
               p-2 shadow-md mt-2 rounded-[10px]
               z-10'>
                {courseBranch.map((item, index) => (
                  <li
                    className='p-2 hover:bg-blue-100 rounded-xl'
                    key={index}
                    tabIndex="0"
                    onClick={() => {
                      handleIndex(index);
                      setShowDropdown(false);
                      handleBranch(index)
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
        <h2>Describtion</h2>
        <div
            tabIndex={0}
            className=" w-full p-[2px] flex items-center rounded-2xl border-2 border-transparent focus-within:border-gray-300"
          > 
          <textarea rows={8} 
            onChange={(e)=>handleDescribtion(e)}
            value={describtion}
            className='w-full border-1 resize-none outline-0 border-gray-300 rounded-xl p-2' name="" id="" placeholder='Wriute your note content here...'></textarea>
        </div>
        
        <div>
          <input 
            onChange={(e)=>handleFile(e)}
            className='border-1 border-gray-300 rounded-md p-2 mt-4 mb-4' type="file" />
        </div>

        <div className='flex gap-2 mt-2 mb-2'>
          <div className="switch relative w-12 h-6">
            <input type="checkbox" 
              onChange={handleType}
              checked={type === 'Public'}
              className="peer absolute opacity-0 w-full h-full cursor-pointer z-10" />
            <span
              className="block w-full h-full bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors"
            ></span>
            <span
              className="absolute top-0 left-0 h-6 w-6 bg-white rounded-full shadow transform transition-transform peer-checked:translate-x-6"
            ></span>
          </div>
          <p>Make this note public</p>
        </div>
        <div className='w-full flex justify-end gap-5 mb-7'>
          <button className='p-2 border-1 rounded-xl border-gray-300'>Cancel</button>
          <button 
            onClick={()=>{addNote();handleClose()}}
            className='p-2 border-1 rounded-xl text-white border-gray-300 bg-[#0080FF]'>Create Note</button>
        </div>
      </div>
      </div>
    </Dialog>
  )
}

export default NoteCreator