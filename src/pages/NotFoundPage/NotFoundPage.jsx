import { Link } from "react-router-dom";
import "./styles.css";

export const NotFoundPage = () => (
  <>
    <div className="notFoundPage_error">
      No page was found.{" "}
      <Link to="/" className="notFoundPage_back">
        Go back
      </Link>
    </div>
  </>
);
