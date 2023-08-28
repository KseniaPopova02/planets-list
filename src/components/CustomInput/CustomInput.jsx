import React from "react";
import { useField } from "formik";
import "./styles.css";
import PropTypes from "prop-types";

export const CustomInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="customInput_error_message">{meta.error}</div>
      )}
    </>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
