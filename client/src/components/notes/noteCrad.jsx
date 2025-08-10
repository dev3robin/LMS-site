import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DownloadIcon from '@mui/icons-material/Download';
const NoteCard = ({note}) => {
  let fileURL;
  if (note.File instanceof Blob) {
    fileURL = URL.createObjectURL(note.File);
  }
  const readableDate = new Date(note.Date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  return (
    <div className='flex flex-col gap-1 h-fit bg-white shadow-md border-1 text-gray-500 border-gray-300 rounded-xl px-5 py-2 w-full md:w-[48%] lg:w-[32%] '>
      <div className='flex items-center justify-between'>
        <h1 className='text-black'>{note.Title}</h1>
        <span
          className={`px-2 shadow-xl border border-gray-300 rounded-2xl text-sm ${
            note.Type === 'Public' ? 'bg-green-100 text-green-600' : ''
          }`}
        >
          {note.Type}
        </span>
      </div>
      <div className='mb-3'>{note.Branch}</div>
      <div className='mb-2'>{note.Describtion}</div>

      
      <div className='text-gray-200'><hr /></div>
      <div>
        <span className='font-semibold'>Media with this note</span>
        <p className='border-1 p-1 w-fit mt-2 rounded border-gray-200'>{note.File.name} </p>
      </div>

      <section className='flex gap-2 p-4 items-center justify-between '>
        <div className='text-[.7rem] flex gap-1'><span><CalendarMonthIcon sx={{fontSize:".8rem"}} /></span>{readableDate}</div>
        <div className='flex gap-5'>
          <div><BookmarkBorderIcon sx={{fontSize:".8rem"}}/></div>
          <div><ShareIcon sx={{fontSize:".8rem"}}/></div>
          <div><a href={fileURL} download target="_blank" rel="noopener noreferrer">
            <DownloadIcon sx={{ fontSize: ".9rem", cursor: "pointer" }} />
          </a></div>
        </div>
      </section>

    </div>
  )
}

export default NoteCard