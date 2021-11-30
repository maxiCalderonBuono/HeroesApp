import React from "react";
import { Link } from "react-router-dom";

import 'animate.css'
import "./HeroeCard.css";

export const HeroeCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col animate__animated animate__pulse">
      <div className="card mb-3" >
        <div className= "row g-0 ">
          <div className="col-4">
            <img
              src={`/assets/heroes/${id}.jpg`}
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
              <Link className="btn btn-primary ms-3 mb-3" to={`/heroes/${id}`}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*

    <div className="card text-dark bg-light mb-3 h-100" style={{maxWidth:540}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="img-fluid rounded-start"
            alt={superhero}
          />
        </div>
        <div classNAme="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p claasName="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <Link className="btn btn-primary" to={`/heroes/${id}`}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>

    */
