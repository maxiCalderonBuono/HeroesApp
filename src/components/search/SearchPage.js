import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../../selectors/getHeroeByName";
import { HeroeCard } from "../heroes/HeroeCard";
export const SearchPage = () => {

  const navigate = useNavigate();
  const location= useLocation();

  const {q = ''}= queryString.parse(location.search)


  const [values, handleInputChange] = useForm({ searchText: q });

  const { searchText } = values;

  const heroesFiltered = useMemo(() => getHeroeByName(q), [q]);


  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
    
  };

  return (
    <>
      <h1>Searches</h1>
      <hr />
      <div className="col">
        <div >
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="enter superhero name"
              className="form-control"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-primary mt-3 col-12"
              type="submit"
            >
              GO
            </button>
          </form>
        </div>
        <div >
          <h4>Results</h4>
          <hr />
          {(q === '') ? <div className= "alert alert-info">
              Introduce a superhero name</div> : (heroesFiltered.length === 0) && <div className= "alert alert-danger">
              No results for: {q}</div>}
          
       

          {heroesFiltered.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
