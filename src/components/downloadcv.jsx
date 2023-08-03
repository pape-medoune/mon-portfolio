import React from 'react'
import {BsCloudDownloadFill} from 'react-icons/bs'
import cv from './Mouhamedoune FALL CV.pdf'

function Downloadcv() {
  return (
    <div className='flex justify-center items-center w-full p-2 bg-[#facf3c] md:p-5'>
      <button className='cv justify-center m-auto md:me-auto   p-4 text-white bg-[#121212] rounded-sm flex gap-x-2 items-center relative'><a href={cv}>TELECHARGER MON CV</a> <BsCloudDownloadFill/></button>
    </div>
  )
}

export default Downloadcv;
