import React from "react";
import { Formik } from "formik";
import { validationSchema, initialValues } from "./formConfig";
import "./styles.css";
import { FormContent } from "./FormContent";
import PropTypes from "prop-types";

export const FilterSidebar = ({ applyFilters, resetFilters }) => {
  const handleFilterApply = ({ keyword, minDiameter, maxDiameter }) => {
    applyFilters({
      keyword,
      minDiameter: parseFloat(minDiameter),
      maxDiameter: parseFloat(maxDiameter),
    });
  };

  const handleClearFields = (resetForm) => {
    resetForm();
    resetFilters();
  };

  return (
    <div className="filterSidebar_wrapper">
      <h2>Filters</h2>
      <Formik
        onSubmit={handleFilterApply}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ resetForm }) => (
          <FormContent
            handleClearFields={handleClearFields}
            resetForm={resetForm}
          />
        )}
      </Formik>
    </div>
  );
};

FilterSidebar.propTypes = {
  applyFilters: PropTypes.func.isRequired,
  returnOriginPlanetsList: PropTypes.func.isRequired,
};
