import React from "react";
import { Link } from "react-router-dom";

import "animate.css";
import "./HeroeCard.css";
// import batman from '../../assets/heroes/dc-batman.jpg' me permite solo contenido estático.

const heroImage = require.context("../../assets/heroes", true);

export const HeroeCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col animate__animated animate__pulse">
      <Link className="card mb-3 text-decoration-none text-dark" to={`/heroes/${id}`}>
        <div className="row g-0 ">
         
         
          <div className="col-4">
            <img
              //src={`/assets/heroes/${id}.jpg`} desde public/assets
              //src= {batman} con import
              src={heroImage(`./${id}.jpg`).default}
              className="img-fluid rounded-start"
              alt={superhero}
            />
          </div>
          
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
            </div>

            <div className="readmore">
              <button className="btn btn-primary ms-3 mb-3" to={`/heroes/${id}`}>
                Read more
              </button>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
};

