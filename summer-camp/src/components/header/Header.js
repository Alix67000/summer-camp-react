import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation";
import HeaderTitre from "./HeaderTitre";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <Container>
        <HeaderTitre />
      </Container>
    </div>
  );
};

export default Header;
