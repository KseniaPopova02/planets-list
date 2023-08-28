import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlanetDetails } from "../../components";
import { fetchPlanetInfo, extractPlanetInfo } from "./helpers";

export const PlanetDetailsPage = () => {
  const { planetName } = useParams();
  const [planetInfo, setPlanetInfo] = useState(null);

  useEffect(() => {
    fetchPlanetInfo(planetName).then((data) => {
      const planet = extractPlanetInfo(data);
      setPlanetInfo(planet);
    });
  }, [planetName]);

  return <PlanetDetails planetInfo={planetInfo} planetName={planetName} />;
};
