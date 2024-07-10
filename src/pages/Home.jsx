import { useState } from "react";
import "../Sass/Home.scss";
import PartialDetail from "../component/PartialDetail";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const [pokeId, setPokeId] = useState(0);
  const [startUrl, setStartUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=14"
  );
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const { pokeData, previous, next, error } = useFetch(startUrl);

  const handleButton = (nextUrl) => {
    setStartUrl(nextUrl);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (searchValue === "")
        handleButton(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=14`);
      else handleButton(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
    }
  };

  return (
    <>
      <div className="Header">
        <input
          type="text"
          placeholder="Search..."
          className="searchbar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleSearch}
        ></input>
      </div>
      <div className="pokemon-info">
        <div className="pokemon-containers">
          {pokeData.map((item) => (
            <button
              className="pokemon-container"
              key={item.id}
              onMouseEnter={() => setPokeId(item.id)}
              onMouseLeave={() => setPokeId(0)}
              onClick={() => handleNavigate(item.id)}
            >
              <div className="id">{item.id}</div>
              <div className="name">{item.name}</div>
              <img className="image" src={item.image} alt="pokemon image" />
            </button>
          ))}
        </div>
        <div className="section">
          <PartialDetail pokeId={pokeId} />
        </div>
      </div>
      <div className="NextPrevious">
        <button
          className="PreviousButton"
          onClick={() => handleButton(previous)}
          disabled={!previous}
        >
          Previous
        </button>
        <button
          className="NextButton"
          onClick={() => handleButton(next)}
          disabled={!next}
        >
          Next
        </button>
      </div>
    </>
  );
}
