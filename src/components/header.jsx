import React from 'react'
import {FaHamburger} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import './header.css'
import  logo from './image/LogoMedoune.png'

function Header() {

    const [nav,navbar]=useState(true);

    function handleClick(){
        navbar(!nav);
    }

    const [changNb,setChangNb]=useState();

    const changenav= ()=>{
        if(window.scrollY>150){
            setChangNb(true);
        }else{
            setChangNb(false);
        }
    }
    
    window.addEventListener('scroll',changenav);
    
  return (

    <div className= { (changNb)? 'z-20 flex w-full bg-yellow-400 h-[80px] fixed justify-between items-center shadow-md md:p-5 duration-500' : 'z-20 flex w-full bg-[#121212] yellow h-[80px] justify-between items-center shadow-md md:p-5  '}>
        <div className={(!nav)?'hidden md:block' : 'logo '}>
           {(changNb)? <img size={50} src={logo} alt="logo"/> :  <h2 className='text-4xl text-white px-1'>Portofo<span className='text-[#facf3c]'>lio</span></h2>}
        </div>

        <div className='navbar px-[2%] '>
            <ul className={(changNb)? 'hidden md:flex gap-[25px] text-black' : 'hidden md:flex gap-[25px] text-white'}>
                <li><a href="#Home" className='text-xl'>Home</a></li>
                <li><a href="#About" className='text-xl'>About</a></li>
                <li><a href="#Competences" className='text-xl'>Competences</a></li>
                <li><a href="#Projets" className='text-xl'>Projets</a></li>
                <li><a href="#Contact" className='text-xl'>Contact</a></li>
            </ul>
        </div>

        <div class='md:hidden px-5 duration-500 ease-in-out fixed right-0' onClick={handleClick}>
            {(nav)? <FaHamburger className='cursor-pointer' size={30}/> : <AiOutlineClose className='cursor-pointer' size={30}/>}
        </div>

        <div className={ (!nav) ? ' md:hidden opacity-100  text-black fixed top-0 left-0 h-full w-[50%]  z-20 bg-yellow-400 duration-500 ease-in-out':' md:hidden text-black z-20 fixed top-0 left-[-100%] h-full w-[45%] bg-sky-800 opacity-0'}>
            <div className='logo mx-5 my-8'>
                <h2 className=''><img src={logo} size={50} alt="logo"/></h2>
            </div>
            <ul className=' headSup flex flex-col gap-[50px] m-10 text-black'>
                <li><a href="#Home" className='text-xl'>Home</a></li>
                <li><a href="#About" className='text-xl'>About</a></li>
                <li><a href="#Competences" className='text-xl'>Competences</a></li>
                <li><a href="#Projets" className='text-xl'>Projets</a></li>
                <li><a href="#Contact" className='text-xl'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;
