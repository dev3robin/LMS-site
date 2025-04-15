import React, { useState,useEffect, useRef } from 'react'
const OtpInput = ({length,otp,setOtp}) => {
  const inputref=useRef([])
  useEffect(()=>{
    if(inputref.current[0]){
      inputref.current[0].focus()
    }
  },[])
  const handleChange=(index,e)=>{
    const value=e.target.value;
    if(isNaN(value))return;
    const newOtp=[...otp];
    newOtp[index]=value.substring(value.length - 1);
    setOtp(newOtp)

    if(value && index<length-1 && inputref.current[index+1]){
      inputref.current[index +1 ].focus();
    }
  }
  const handleClick=(index)=>{
    inputref.current[index].setSelectionRange(0,1)
  }
  const handleKeyDown=(index, e)=>{
    if(e.key === "Backspace" && !otp[index] && index>0 && 
      inputref.current[index-1]){
        inputref.current[index-1].focus()
      }
  }
  return (
    <div className='flex gap-4 w-full justify-center'>        
      {otp.map((value,index) =>{
        return(
          <input
            ref={(input)=>(inputref.current[index]=input)}
            key={index}
            type="text"
            value={value}
            onChange={(e)=>handleChange(index,e)}
            onClick={()=>handleClick(index)}
            onKeyDown={(e)=> handleKeyDown(index,e)}
            className='otpInput'
          />
        )
      })}
  </div>
  )
}

export default OtpInput