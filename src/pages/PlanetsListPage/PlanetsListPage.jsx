import React, { useState, useEffect, useMemo } from "react";
import { FilterSidebar, PlanetsList, Spinner } from "../../components";
import { fetchPlanets, filterPlanets } from "./helpers";
import { FILTER_FIELDS } from "../../constants";
import "./styles.css";

export const PlanetsListPage = () => {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlanets()
      .then((data) => {
        setPlanets(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const applyFilters = (filterParams) => {
    setFilters(filterParams);
  };

  const resetFilters = () => {
    setFilters(null);
  };

  const planetsToDisplay = useMemo(() => {
    if (!planets) {
      return [];
    }

    if (!filters) {
      return planets;
    }

    return filterPlanets(planets, filters);
  }, [filters, planets]);

  return (
    <div className="planetListPage_wrapper">
      <FilterSidebar applyFilters={applyFilters} resetFilters={resetFilters} />

      {isLoading ? (
        <Spinner />
      ) : (
        <PlanetsList
          keyword={filters?.[FILTER_FIELDS.KEYWORD]}
          planets={planetsToDisplay}
        />
      )}
    </div>
  );
};
