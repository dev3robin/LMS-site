import React from 'react'

const NoteCard = ({note}) => {
  return (
    <div className='bg-white shadow-md border-1 border-gray-300 rounded-xl p-2 w-full sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[40%]  '>
      <div>
        <h1>{note.Title}</h1>
      </div>
      <div><span>{note.id}</span></div>
      <div>branch</div>
      <div>describtion</div>
      <hr />
      <section className='flex gap-2'>
        <div>date</div>
        <div>share</div>
        <div>download</div>
      </section>

    </div>
  )
}

export default NoteCard