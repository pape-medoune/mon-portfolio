import React from 'react'
import './skills.css'
import {GiConfirmed} from 'react-icons/gi'

function Skills() {
  return (
    <div className=' w-full h-fit flex items-center flex-col justify-center' id='Competences' >
      <h1 className='text-center text-[2.2rem] skill reveal'>Mes Compétences</h1>
      <div className='grid w-full p-5 h-full grid-cols-1 lg:grid-cols-2 md:p-20'>
      <div className='reveal  shadow-xl w-full flex items-center flex-col justify-center '>
            <h1  className='text-center m-2 text-[2rem] text-[#fcaf3c]'>Frontend</h1>
            <div className='grid grid-cols-2  bg-yellow-400 text-black p-5'>
                <div>
                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> HTML</h1>
                        <p>Intermediare</p>
                    </div>

                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> CSS</h1>
                        <p>Niveau Pro</p>
                    </div>

                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> REACT JS</h1>
                        <p>Intermediare</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> TAILWIND CSS</h1>
                        <p>Intermediare</p>
                    </div>

                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> BOOTSTRAP</h1>
                        <p>Intermediare</p>
                    </div>

                </div>
            </div>
        </div>

        <div className='reveal  shadow-xl   flex items-center flex-col justify-center w-100'>
            <h1  className='text-center m-2 text-[2rem] text-[#fcaf3c]'> Backend</h1>
            <div className='grid grid-cols-2 w-fit bg-yellow-400 text-black p-5 gap-x-20 '>
                <div>
                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> PHP</h1>
                        <p>Intermediare</p>
                    </div>

                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> NodeJS</h1>
                        <p>Debutant</p>
                    </div>

                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> LARAVEL</h1>
                        <p>Debutant</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> MYSQL</h1>
                        <p>Intermediare</p>
                    </div>

                    <div>
                        <h1 className='text-[1.5rem] items-center gap-x-2 flex'><GiConfirmed/> MongoDB</h1>
                        <p>Intermediare</p>
                    </div>
                </div>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Skills;
