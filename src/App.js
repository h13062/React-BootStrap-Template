import "./App.css";
import {
  Row,
  Col,
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* Bootstrap navbar */}
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                // src="https://dummyimage.com/600x400/000/fff"
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 className="font-weight-light">Tagline</h1>
              <p>
                This is my template to study React and Bootstrap. It doesn't
                have too much fancy flare to it, but it makes a good example for
                those begnning with Bootstrap. Feel free to use this template as
                your wishes. Good Luck!!!!!
              </p>
              <Button variant="outline-primary">Call to action</Button>
            </Col>
          </Row>
          <Row>
            <Card>
              <Card.Body className="text-center bg-secondary text-white my-5 py-4">
                This call to action card is a great place to show case some
                important information or display a tagline!
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/500/300" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/400/300" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            r
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; First Template 12/272022
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
