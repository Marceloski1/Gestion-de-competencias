import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'
function NavBar() {
  const expand =  'lg' ; 
    return (
    <>
        <Navbar key={expand} expand={expand} className="mb-3 nav">
          <Container fluid>
            <Navbar.Brand>
              <h2>Gestor</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Opciones
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  className='text-dark fs-3' href="/">Home</Nav.Link>
                  <Nav.Link  className='text-dark fs-3' href="/Login">Login</Nav.Link>
                  <NavDropdown  className='fs-3'
                    title="Deportivas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item  className='dark fs-3' href="/TablaAtleta">
                    Atletas
                    </NavDropdown.Item>
                    <NavDropdown.Item  className='dark fs-3' href="/TablaCompetencia">
                    Competencias
                    </NavDropdown.Item>
                   <NavDropdown.Item className='dark fs-3' href="/Nueva">
                    Inscripciones
                    </NavDropdown.Item>                
                  </NavDropdown>
                </Nav>
               <div style={{with:'20px', color:'transparent'}}>---</div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
  );
}

export default NavBar;


/*
 <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                */