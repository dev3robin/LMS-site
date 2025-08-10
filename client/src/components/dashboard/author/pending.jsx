import { Dialog } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { deleteFromStore, saveToStore } from '../../../idbHelper'

const PendingReq = ({openReq,setOpenReq,allReq}) => {

const AcceptClick = (data) => {
  const reqId = data.id;
  delete data.userStatus;
  delete data.id;
  delete data.userId;
  const baseName = data.userName?.replace(/\s+/g, "_") || "user";
  const uniqueId = baseName + reqId;
  if (data.userRole === "teacher") {
    data.TeacherId = uniqueId;
    saveToStore('teachers', data);

  } else if (data.userRole === "author") {
    data.authorId = uniqueId;
    saveToStore('authors', data);
  }
  //send user a acception mail

  deleteFromStore('authrequest', reqId);
  setOpenReq(false);
};

  const RejectClick=(data)=>{
    const reqId=data.id
      //send user a rejection mail
    deleteFromStore('authrequest',reqId)
    setOpenReq(false)
  }
  return (
        <Dialog open={openReq}>
          <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
          <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
            <div
              className="w-full sm:w-[70%] max-w-[720px] p-6
               bg-[#F6F7F9] rounded-2xl flex flex-col items-center"
              role="dialog"
              aria-modal="true"
              aria-labelledby="added-to-cart-title"
            >
                {/* Header */}
                <div className=" w-full flex items-center justify-between mb-10">
                  <div className='flex flex-col'>
                    <h2 className="text-lg font-bold">
                      Auth or Teacher Request
                    </h2>
                  </div>
                  <div className='flex align-top place-items-start'>
                    <button onClick={()=>setOpenReq(false)} className='hover:bg-red-500 rounded-4xl'>
                    <CloseIcon />
                    </button>
                  </div>
                </div>
                <div className='w-full'><h1 className='mb-3'>Request from</h1></div>
                <div className='w-full grid  gap-4 mb-5'>
                  {allReq.map((item,index)=>{
                    return (
                      <div key={index} className='max-w-[250px] border-1 p-2 rounded-2xl border-gray-300'>
                        <section>
                          <p><span className='text-sm font-bold'>UserName :</span> {item.userName}</p>
                          <p><span className='text-sm font-bold'>reqId :</span> {item.id}</p>
                          <p><span className='text-sm font-bold'>UserEmail :</span> {item.userEmail}</p>
                          <p><span className='text-sm font-bold'>Role Apply for :</span> {item.userRole}</p>
                        </section>
                        <div className='text-sm flex items-center justify-between gap-1 mt-4' >
                          <button onClick={()=>RejectClick(item)} className='p-2 bg-red-200 border-1 border-gray-400 rounded-xl'>Reject</button>
                          <button onClick={()=>AcceptClick(item)} className='p-2 bg-green-200 border-1 border-gray-400 rounded-xl'>Accept as {item.userRole}</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </div>
          </div>
    
        </Dialog>
  )
}

export default PendingReq