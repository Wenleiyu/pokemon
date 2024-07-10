import "../Sass/PartialDetails.scss";
import { usePokeId } from "../hooks/useFetch";

export default function PartialDetail({ pokeId }) {
  const { data, error } = usePokeId(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
  );

  if (pokeId === 0) return;

  return (
    <div className="partialDetailHome">
      <div className="nameHome">{data.name?.toUpperCase()}</div>
      <img
        className="gifHome"
        src={data.sprites?.other?.["official-artwork"]?.front_default}
        alt="gif image"
      />
      <div className="pokeInfoHome">Weight: {data.weight}</div>
      <div className="pokeInfoHome">Height: {data.height}</div>
      <div className="pokeInfoHome">HP: {data.stats?.[0].base_stat}</div>
      <div className="pokeInfoHome">Attack: {data.stats?.[1].base_stat}</div>
    </div>
  );
}
