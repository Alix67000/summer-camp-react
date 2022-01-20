import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const TabBar = () => {
  return (
    <div className="tab-wrapper tabs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Tab.Container defaultActiveKey="dates">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="dates">
                        <i class="far fa-calendar-alt"></i> Dates
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="hebergement">
                        <i class="fas fa-caravan"></i> Hébergement
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="repas">
                        <i class="fas fa-utensils"></i> Repas
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="transport">
                        <i class="fas fa-bus"></i> Transport
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className="tab-info">
                  <Tab.Content>
                    <Tab.Pane eventKey="dates">
                      <h5>Dates</h5>
                      <p>1 semaine minimum du 15 juin au 15 septembre..</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="hebergement">
                      <h5>Hebergement</h5>
                      <p>
                        La plupart des chantiers propose un hébergement en
                        tente, mobil-home ou en chambres collectives. Ceux qui
                        n’en proposent pas s’adressent donc plutôt aux jeunes
                        vivant à proximité. !
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="repas">
                      <h5>Repas</h5>
                      <p>
                        Tu partageras les repas qui te seront offerts avec les
                        personnes accueillies chez Emmaüs, les bénévoles, les
                        salariés et les autres jeunes du chantier.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="transport">
                      <h5>
                        <i class="fas fa-bus"></i> trasnsport
                      </h5>
                      <p>
                        Les frais de transport jusqu’au chantier seront à ta
                        charge.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabBar;
