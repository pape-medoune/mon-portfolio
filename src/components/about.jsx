import React from 'react'
import me from './image/me.jpeg'
import './about.css'

function About() {
  return (
    <div className=' p-4 reveal w-full h-fit md:p-20  flex justify-center items-center 'id="About">
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-fit top-20'>
      <div className='relative hidden lg:flex justify-center items-center w-full h-full'>
        <div className='shape absolute'>

        </div>  
        <div className='absolute'>
            <img src={me} alt="" className='  w-[50%] h-[60%] rounded-lg right-[-70px] top-[40px] relative z-10'/>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='texte p-5 flex flex-col gap-y-6 '>
            <h1 className='text-[2.2rem] text-center '>About</h1>
            <p className=' md:pr-20'>En tant que développeur passionné, je suis constamment immergé dans l'univers de la technologie et de la programmation. Mon amour pour la création de logiciels et d'applications m'a conduit à chercher des défis stimulants pour affiner mes compétences. Chaque ligne de code que j'écris est une expression de ma passion et de ma détermination à repousser les limites de ce que je peux accomplir.Je suis constamment à la recherche de nouvelles opportunités pour améliorer mes connaissances et ma compréhension des langages de programmation. Je me plonge dans des projets passionnants qui me permettent de créer des solutions innovantes et efficaces. J'aime travailler en équipe, collaborer avec d'autres développeurs talentueux et partager mes idées pour créer des produits remarquables.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;
