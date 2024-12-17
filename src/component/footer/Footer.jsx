/*import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Navbar} from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Navbar className="text-light mt-auto bg-dark" expand="lg">
            <Container >
                <Row className="w-100">
                    <Col md={4}>
                        <h5>Servicios</h5>
                        <p>Descripción de servicios.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Contacto</h5>
                        <p>Email: contacto@empresa.com</p>
                    </Col>
                    <Col md={4}>
                        <h5 >Redes Sociales</h5>
                        <p>Síguenos en nuestras redes sociales.</p>
                        <p>Facebook: <span>Gestores de competencias</span></p>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Footer;
*/

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className=' bg-dark Mifoot'>
        <Navbar className="mt-auto " expand="lg">
            <Container>
                <Row className="w-100 text-center text-md-left">
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <h5>Servicios</h5>
                        <p>Descripción de servicios.</p>
                    </Col>
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <h5>Contactos</h5>
                        <p>Email: gestoresDeportivos@gmail.com</p>
                        <p>+1 504 232 323</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5>Redes Sociales</h5>
                        <p>Síguenos en nuestras redes sociales.</p>
                        <p>Facebook: <span>Gestores de competencias</span></p>
                    </Col>
                </Row>
            </Container>
            </Navbar>
            <Container>
            <Row>
                    <Col className='mb-3 mb-md-0 mt-2'>
                    <h5>Política de Privacidad</h5>
                    <p>En "Gestión de Competencias y Atletas" valoramos tu privacidad y nos comprometemos a proteger tu información personal.</p>
                    </Col>
                </Row>
            </Container>
            </div>
    );
}

export default Footer;
