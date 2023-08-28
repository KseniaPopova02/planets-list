import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PlanetDetails = ({ planetInfo, planetName }) => {
  const { rotation_period, orbital_period, diameter } = planetInfo || {};

  return (
    <div className="planetDetails_wrapper">
      <h2>Planet Details: {planetName}</h2>
      {planetInfo ? (
        <>
          <ul className="planetDetails_list">
            <li>Rotation Period: {rotation_period}</li>
            <li>Orbital Period: {orbital_period}</li>
            <li>Diameter: {diameter}</li>
          </ul>
          <Link className="planetDetails_back" to="/">
            Back
          </Link>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

PlanetDetails.propTypes = {
  planetInfo: PropTypes.shape({
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
  }),
  planetName: PropTypes.string.isRequired,
};
