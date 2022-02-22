import React from "react";
import { Container } from "react-bootstrap";
import CopyRight from "./CopyRight";
import Links from "./links/Links";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Newsletter />
        <Links />
        <CopyRight />
      </Container>
    </div>
  );
};

export default Footer;
