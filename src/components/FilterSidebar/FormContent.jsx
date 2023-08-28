import { Form } from "formik";
import { CustomInput } from "../CustomInput";
import { formFields } from "./formFields";
import PropTypes from "prop-types";

export const FormContent = ({ handleClearFields, resetForm }) => (
  <Form>
    <div className="filterSidebar_form">
      {formFields.map((field) => (
        <CustomInput key={field.name} {...field} />
      ))}

      <button type="submit" className="filterSidebar_btn">
        Apply Filters
      </button>
      <button
        type="button"
        className="filterSidebar_btn"
        onClick={() => handleClearFields(resetForm)}
      >
        Clear Fields
      </button>
    </div>
  </Form>
);

FormContent.propTypes = {
  handleClearFields: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};
