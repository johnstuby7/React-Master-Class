import React from "react";
import { link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <link to="/products">The List of Products</link>.
      </p>
    </>
  );
}

export default HomePage;
