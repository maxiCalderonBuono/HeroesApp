import { heroes } from "../data/heroes";


export const getHeroeByName = (name ='') => {

    console.log("executed")

    name= name.toLowerCase();

    if (name === "") {
        return [];
    }

    return heroes.filter (hero => hero.superhero.toLowerCase().includes(name));

}

