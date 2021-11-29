import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById';

export const Heroespage = () => {

 const {heroeId} = useParams();


 const hero = useMemo(()=> getHeroeById(heroeId), [heroeId]);

 const navigate= useNavigate();

 const handleReturn = () => {
   navigate(-1)
 }

 if (!hero) {
     return <Navigate to ="/" />
 }

 const {id,superhero, publisher, alter_ego, first_appearance, characters} = hero
 

 const imagePath = `/assets/heroes/${id}.jpg`

 
    return (
        <div className= "row mt-5">
            <div >
                <img src= {imagePath} alt = {superhero} className= "img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>
            <div >
                <h3>{superhero}</h3>
             <ul className= "list-group list-group-flush">
              <li className= "list-group-item"> <b>Alter ego:</b> {alter_ego}</li>
              <li className= "list-group-item"> <b>Publisher:</b> {publisher}</li>
              <li className= "list-group-item"> <b>First Appearance:</b> {first_appearance}</li>
             </ul>
             <h5 className= "mt-3">Characters</h5>
             <p>{characters}</p>

             <button className="btn btn-outline-info col-12" onClick = {handleReturn}>
                 Return
             </button>
            </div>
        </div>
    )
}