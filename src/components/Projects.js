import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Microprocessor Systems Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Communication Systems Upgrade</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Information Security Compliance</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Sumobot??? (Failure)</p>
                      <div className="project_points_cont">
                        <ul className="project_points">
                          <li>Store a program an Arduino-Based Sumobot Using C++</li>
                          <li>Create a Robot Chassis</li>
                          <li>Connect the Circuitries of Different Components of Arduino-Based Sumobot</li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>CPS Recovery Solutions Inc. Communication Systems Upgrade</p>
                      <div className="project_points_cont">
                        <ul className="project_points">
                          <li>Deployment of Additional Networking Devices</li>
                          <li>Deployment of Private Automatic Branch Exchange</li>
                          <li>Configuration of Communication System for Compliance</li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>CPS Recovery Solutions Inc. Information Security Compliance</p>
                      <div className="project_points_cont">
                        <ul className="project_points">
                          <li>Revised Information Security Policies</li>
                          <li>Deployment and Administration of EDR with DLP and SIEM</li>
                          <li>Configuration of Endpoints for Compliance</li>
                          <li>Infomation Security Awareness Training</li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp}></img>
    </section>
  )
}
