import { useNavigate, useRouteError } from "react-router-dom";
import common from "./common.module.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as {
    statusText?: string;
    message?: string;
  };
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          Error:
          <span className={`${common.error}`}>
            {error.statusText || error.message}
          </span>
        </i>
      </p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
