import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error404 = () => {
  return (
    <BackgroundError>
      <p>Page not found...</p>
      <p>Page not found...</p>
      <p>Page not found...</p>
      <p>Page not found...</p>
      <p>Page not found...</p>
      <p>Page not found...</p>
      <Link to="/">Home</Link>
    </BackgroundError>
  );
};

export default Error404;

const BackgroundError = styled.div`
  background-color: red;
  height: 100%;
`;
