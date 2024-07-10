import { useParams } from "react-router-dom";
import { usePokeId } from "../hooks/useFetch";
import "../Sass/Pokemon.scss";
import CircleProgressBar from "../component/CircleProgressBar";
import { Link } from "react-router-dom";

export default function Pokemon() {
  const { pokeId } = useParams();

  const { data, error } = usePokeId(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
  );

  if (pokeId === 0) return;

  const hp =
    data?.stats?.find((stat) => stat.stat.name === "hp")?.base_stat || 0;
  const attack =
    (((data?.stats?.find((stat) => stat.stat.name === "attack")?.base_stat ||
      0) +
      (data?.stats?.find((stat) => stat.stat.name === "special-attack")
        ?.base_stat || 0)) *
      100) /
    200;
  const defense =
    (((data?.stats?.find((stat) => stat.stat.name === "defense")?.base_stat ||
      0) +
      (data?.stats?.find((stat) => stat.stat.name === "special-defense")
        ?.base_stat || 0)) *
      100) /
    200;
  const speed =
    data?.stats?.find((stat) => stat.stat.name === "speed")?.base_stat || 0;

  return data ? (
    <>
      <div
        className="backHome"
        style={{ "--pokeType": `var(--type-${data.types[0].type.name})` }}
      >
        <Link to="/" className="backHomeLink">
          ⬅️Back
        </Link>
      </div>
      <div
        className="partialDetail"
        style={{ "--pokeType": `var(--type-${data.types[0].type.name})` }}
      >
        <div className="typeStat">
          <div className="pokeTypes">
            {data.types.map((item) => (
              <>
                <button
                  className="pokeType"
                  style={{ "--pokeType": `var(--type-${item.type.name})` }}
                  key=""
                >
                  {item.type.name}
                </button>
                &nbsp;&nbsp;&nbsp;
              </>
            ))}
          </div>
          <div className="progressBars">
            {data.stats.map((item) => (
              <>
                <div className="statName">{item.stat?.name}</div>
                <div className="pokeInfo">{item.base_stat}</div>
                <div className="progressBar">
                  <div
                    className="bar"
                    style={{
                      "--progress-width": `${item.base_stat}%`,
                    }}
                  ></div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="nameImage">
          <div className="name">{data.name?.toUpperCase()}</div>
          <img
            className="gif"
            src={data.sprites?.other?.["dream_world"]?.front_default}
            alt="gif image"
          />
        </div>

        <div className="progressCircles">
          <CircleProgressBar action="HP" percentage={hp} circleWidth={200} />
          <CircleProgressBar
            action="ATTACK"
            percentage={attack}
            circleWidth={200}
          />
          <CircleProgressBar
            action="DEFENSE"
            percentage={defense}
            circleWidth={200}
          />
          <CircleProgressBar
            action="SPEED"
            percentage={speed}
            circleWidth={200}
          />
        </div>
      </div>
    </>
  ) : (
    <>Loading...</>
  );
}
