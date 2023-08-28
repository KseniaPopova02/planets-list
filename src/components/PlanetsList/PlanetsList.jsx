import React from "react";
import { highlightText } from "./helpers";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

export const PlanetsList = ({ planets, keyword }) => {
  return (
    <div className="planetsList_wrapper">
      <h2>Planets List</h2>

      <ul className="planetsList_list">
        {planets.map((planet) => (
          <li key={planet.name}>
            <Link className="planetsList_link" to={`/planet/${planet.name}`}>
              {highlightText(planet.name, keyword)}
            </Link>
          </li>
        ))}
      </ul>
      {planets.length === 0 && <div>No planets were found</div>}
    </div>
  );
};

PlanetsList.defaultProps = {
  keyword: "",
};

PlanetsList.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  keyword: PropTypes.string,
};
