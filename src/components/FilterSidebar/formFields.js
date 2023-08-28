import { FILTER_FIELDS } from "../../constants";

export const formFields = [
  {
    className: "filterSidebar_filter",
    placeholder: "Planet name",
    name: FILTER_FIELDS.KEYWORD,
    type: "text",
  },
  {
    className: "filterSidebar_filter",
    placeholder: "Min. Diameter",
    name: FILTER_FIELDS.MIN_DIAMETER,
    type: "number",
  },
  {
    className: "filterSidebar_filter",
    placeholder: "Max. Diameter",
    name: FILTER_FIELDS.MAX_DIAMETER,
    type: "number",
  },
];
