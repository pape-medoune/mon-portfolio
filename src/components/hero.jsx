import React from 'react'
import me from './image/me-removebg-preview.png'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import {BsCloudDownloadFill,BsChevronDoubleDown} from 'react-icons/bs'
import "./hero.css"
import shape from './image/blob-haikei-removebg-preview.png'
import cv from './Mouhamedoune FALL CV.pdf'

function Hero() {
  
  return (
    <div className='z-0 pt-0 relative grid grid-cols-1 md:grid-cols-3 w-full h-fit pt-15' id="Home">
      <div className='icon text-white  flex-row md:flex-col h-full flex items-center justify-center'>
        <div className=''>
          <a href="https://github.com/pape-medoune"><AiFillGithub size={50} className='iconAi'/>  </a>
        </div>
        <div className='' >
          <a href="https://www.instagram.com/pape_medoune_fall/"><AiFillInstagram size={50} className='iconAi'/></a>
        </div>
        <div className=''>
          <a href="https://www.linkedin.com/in/mouhamedoune-fall-99b79322b/"><AiFillLinkedin size={50} className='iconAi'/></a>
        </div>
        
        
      </div>
      <div className='white flex items-center justify-center flex-col gap-y-3'>
        <div className='i-left-wrapper text-center'>
          <h2 className='i-intro'>Hello, Je me nomme</h2>
          <h2 className='i-name'>MOUHAMEDOUNE FALL</h2>
        </div>
        <div className='i-title'>
            <div className='iT text-center'> 
              <div className='iT-item'>ETUDIANT GENIE LOGICIEL</div>
              <div className='iT-item'>DEV FRONTEND</div>
              <div className='iT-item'>DEV WORDPRESS</div>
              <div className='iT-item'>DEV BACKEND</div>
            </div>
        </div>
        <div className='bienvenue text-4xl text-center'>
          <h2>BIENVENUE DANS MON PORTFOLIO</h2>
        </div>
        <button className='cv border-2 p-3 border-white text-white bg-[#121212] rounded-sm flex gap-x-2 items-center relative top-5'><a href={cv}>TELECHARGER MON CV</a> <BsCloudDownloadFill/></button>
        <BsChevronDoubleDown className=' nextStep cursor-pointer text-white relative top-9' size={35} />
      </div>
      <div className='flex  justify-center w-full rounded-full h-full items-center gap-y-5 flex-col relative'> 
        <div className='relative  w-[100%] h-[100%]  overflow-hidden'>
            <img src={shape} className=' absolute  w-[100%] h-[100%] overflow-hidden' alt=""/>
            <img  src={me} className='relative photoDeMoi  w-[100%] h-[100%] top-20 z-0  object-contain ' alt=""/>
        </div>
      </div>
      
    </div>
  )
}

export default Hero;
