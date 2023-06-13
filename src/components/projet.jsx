import React from 'react'
import Card from './card'
import Data from './data'
import './projet.css'

function Projet() {
    const showData = Data.map((data) =>{
        return(
            <Card name={data.Name} Link={data.Link} image={data.img} tech={data.Tech}/>
        )
    })

    return (
        <div className='flex flex-col justify-center items-center' id="Projets">    
            <h1 className='projet text-center text-[2.2rem]'>Mes Projets</h1>
            <div className='cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  text-center gap-5 p-5'>
                {showData}
            </div>
        </div>
    );
}

export default Projet;
