import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occurred";
  let message = "An Error Occurred";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = " COuld not find resource or page";
  }

  return <PageContent title={title}>{message}</PageContent>;
}

export default ErrorPage;
