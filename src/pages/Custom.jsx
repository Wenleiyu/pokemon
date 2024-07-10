import "../Sass/Custom.scss";
import CircleProgressBar from "../component/CircleProgressBar";
import { Link } from "react-router-dom";
import myImg from "../picture/1686149309614.jpg";

export default function Pokemon() {
  const data = {
    stats: [
      {
        base_stat: 100,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 100,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 100,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 100,
        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 100,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 100,
        stat: {
          name: "speed",
        },
      },
    ],
    types: [
      {
        type: {
          name: "poison",
        },
      },
      {
        type: {
          name: "fire",
        },
      },
    ],
  };

  return (
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
                  style={{
                    "--pokeType": `var(--type-${item.type.name})`,
                  }}
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
        <div className="wenleiNameImage">
          <div className="name">Connor's BOSS</div>
          <img className="gif" src={myImg} alt="gif image" />
        </div>

        <div className="progressCircles">
          <CircleProgressBar action="HP" percentage={100} circleWidth={200} />
          <CircleProgressBar
            action="ATTACK"
            percentage={100}
            circleWidth={200}
          />
          <CircleProgressBar
            action="DEFENSE"
            percentage={100}
            circleWidth={200}
          />
          <CircleProgressBar
            action="SPEED"
            percentage={100}
            circleWidth={200}
          />
        </div>
      </div>
    </>
  );
}
