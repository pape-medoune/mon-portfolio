import React from 'react'
import {SiMinutemailer} from 'react-icons/si'
import {BsWhatsapp,BsFillTelephoneFill} from 'react-icons/bs'
import './contact.css'

function Contact() {

 
  return (
        
      <div className='flex flex-col items-center' id="Contact">
        <h1 className='contacte text-center text-[2.2rem] reveal'>Contacts</h1>
        <div className='w-full p-5 flex object-contain items-center justify-around flex-wrap'>
            <div className='p-10 reveal h-fit w-[300px] reveal  '>
                <a href="mailto:mouhamedounedev@gmail.com" className='flex  text-center flex-col items-center justify-center'>
                  <SiMinutemailer size={20}/>
                  <h1>M'envoyer un mail</h1>
                </a>    
            </div>

            <div className='p-10 reveal h-fit w-[300px] flex items-center justify-center text-center flex-col reveal '>
                <a href="https://wa.me/779509892" className='flex  text-center flex-col items-center justify-center'>
                <BsWhatsapp size={25}/>
                <h1 className='w-full'>Mon Whatsapp</h1>   
                </a> 
            </div>

            <div className='p-10 reveal h-fit w-[300px] text-center flex items-center justify-center flex-col reveal '>
                <a href="tel:779509892" className='flex  text-center flex-col items-center justify-center'>
                <BsFillTelephoneFill size={25}/>
                <h1>Appelez Moi</h1>  
                </a>
            </div>
      {/* <div className='flex flex-col justify-center items-center w-full h-fit p-4  '>
        <form action='' method='POST' className='flex flex-col gap-y-2 w-full p-3 md:w-[70%]'>
            <input type='text' className='border-2 rounded-xl border-white ' placeholder='Prenom' id="Prenom"/> 
            <input type='text' className='border-2 rounded-xl border-white ' placeholder='Nom' id="Nom"/> 
            <input type='text' className='border-2 rounded-xl border-white ' placeholder='Votre adresse mail' id="adresse"/>
            <textarea placeholder='Nous ecrire ici' className='rounded-xl p-3 border-2 border-white' id="message"></textarea>
            <div className='flex items-center rounded-xl w-fit p-3 border-2 border-white ' id="sendBtn">
                <button>Envoyer </button> <FaTelegramPlane size={20}/>
            </div>
            
        </form>
      </div> */}
    </div>
      </div>
    
  )
}

export default Contact;
