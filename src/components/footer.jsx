import React from 'react'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import './footer.css'

function Footer() {
  return (
    <div className='w-full h-fit bg-white rounded-tr-[50px] shadow dark:bg-gray-800'>
        <div className='w-full p-4 flex flex-col justify-between items-center h-fit gap-y-10'>
        <div className='text-center'>
            <h1 className='text-[2.1em] txt'>Mouhamedoune</h1>
        </div>

        <div  className='flex'>
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

        <div className='text-center'>
            <h1 className='text-[1.4em] txt'>©Mouhamedoune, All copyright reserved </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer;
