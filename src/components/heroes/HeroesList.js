import React, { useMemo } from "react";
import "animate.css";
import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher";
import { HeroeCard } from "./HeroeCard";
import Fade from "react-reveal/Fade";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
      <Fade bottom>
        {heroes.map((heroe) => (
          <HeroeCard key={heroe.id} {...heroe} />
        ))}
      </Fade>
    </div>
  );
};
