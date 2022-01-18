import React from "react";
import { Row, Col } from "react-bootstrap";
import Faq from "./Faq";
import SocialNetwork from "./SocialNetwork";
import Address from "./Address";

const Links = () => {
  return (
    <div className="links">
      <Row>
        <Col>
          <Address />
        </Col>
        <Col>
          <SocialNetwork />
        </Col>
        <Col>
          <Faq />
        </Col>
      </Row>
    </div>
  );
};

export default Links;
