import * as Yup from "yup";
import { FILTER_FIELDS } from "../../constants";

export const validationSchema = Yup.object().shape({
  [FILTER_FIELDS.KEYWORD]: Yup.string().required("Required"),
  [FILTER_FIELDS.MIN_DIAMETER]: Yup.number().required("Required"),
  [FILTER_FIELDS.MAX_DIAMETER]: Yup.number().required("Required"),
});

export const initialValues = {
  [FILTER_FIELDS.KEYWORD]: "",
  [FILTER_FIELDS.MIN_DIAMETER]: "",
  [FILTER_FIELDS.MAX_DIAMETER]: "",
};
