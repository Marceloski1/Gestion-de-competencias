import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import './Acordion.css' 
function Acordion({header , body ,  cont}) {
  return (
   <Container className="my-5 ">
    <Accordion  alwaysOpen>
      <Accordion.Item eventKey="0" className='miAcordion '>
        <Accordion.Header className='responsive-title'> <h6>{header[0 + cont]}</h6>
    </Accordion.Header>
        <Accordion.Body>
          <h6>{body[0 + cont]}</h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='miAcordion'>
        <Accordion.Header ><h6>{header[1 + cont]}</h6></Accordion.Header>
        <Accordion.Body>
          <h6>{body[1 + cont]}</h6>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    
  );
}

export default Acordion;