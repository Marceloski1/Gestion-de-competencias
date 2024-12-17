import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Carrusel  from '../../component/carrusel/Carrusel';
import { Container, Row, Col } from 'react-bootstrap'
import atleta from './../../assets/img/noIcons/minimalist.png'
import CardChangeL  from '../../component/cardChange/CardChangeL';
import CardChangeR  from '../../component/cardChange/CardChangeR';
import probar from './../../assets/img/noIcons/Corredor.png'
import otro from './../../assets/img/noIcons/Ciclistas.png'
import Acordion from '../../component/acordion/Acordion';

function Home() {
  const quienes = 'En "Gestión de Competencias y Atletas", nos dedicamos a simplificar y optimizar la gestión de eventos deportivos y la participación de los atletas.Nuestro compromiso es brindar una plataforma intuitiva y accesible para organizadores y deportistas, asegurando que cada evento sea un éxito rotundo.' 
  const servicios = 'Nuestro sistema permite a los atletas registrarse fácilmente en diferentes competencias, ofreciendo herramientas poderosas para organizar y gestionar competencias, desde la planificación hasta el seguimiento de los resultados.' 
  const header = [
    '¿Cómo puedo hacer seguimiento a mis inscripciones y actividades?' ,
    '¿La plataforma es accesible desde dispositivos móviles?' , 
    '¿Existen tarifas asociadas con el uso de la plataforma?' , 
     'Qué debo hacer si tengo problemas durante el registro o inscripción?'
   ]
  const body = [
    'Una vez que te registres e inicies sesión en tu cuenta, podrás acceder a un panel donde podrás ver todas tus inscripciones, resultados anteriores y cualquier actividad relacionada con tus eventos. ' , 
     'Sí, nuestra plataforma está optimizada para ser utilizada desde dispositivos móviles, lo que permite a los atletas y organizadores acceder a sus cuentas y gestionar eventos desde cualquier lugar.' ,
     'Las tarifas pueden variar según el tipo de evento y los servicios adicionales que se requieran.' , 
     'Si encuentras algún problema, puedes contactar a nuestro equipo de soporte a través del formulario de contacto en nuestra página o enviarnos un correo electrónico a soporte@gestordecompetencias.com.'

  ]
  let cont = 0 ;
  return (
    <div className='theHome'> 
    <div className=' d-flex align-items-center flex-column gap-5'>
    <h1>Gestión de Competencias y Atletas</h1>
    <Container> 
      <Row>
        <Col>
        <Carrusel/>
        </Col>
      </Row>
      </Container>
      <div className='espacio'></div>
   
    <CardChangeR
      imageSrc={atleta}
               title="¿Quiénes Somos?"
               text={quienes}
               
     />
   
    
  <CardChangeL
      imageSrc={otro}
               title="Servicios que Ofrecemos"
               text={servicios}
     />
   
   <CardChangeR
      imageSrc={probar}
               title="¿Cómo puedo ver el calendario de competencias?"
               text="Para ver el nuestro sistema vaya a la esquina superior derecha y  clique la opción Deportivas "

     />

        
      <Container>
      <h3>Preguntas frecuentes</h3>
      <div className='d-flex  gap-3 mt-2 clase'>
      <Acordion header={header} body={body} cont={cont++}/>
      <Acordion header={header} body={body} cont={++cont}/>      
      </div>
      </Container>

   
    </div>
    </div>
  );
}

export default Home;

/*
 <Container className='w-100 h-100'>
      <Row>
        {cardVariants.map((variant, index) => (
          <Col 
            key={index} 
            xs={12} sm={6} md={6} lg={4} 
            className="mb-4"
          >
            <Card 
              bg={variant.toLowerCase()}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '100%' }}
            >
              
              <Card.Header>Header</Card.Header>

              <div className='justify-center'>
              <Card.Img variant="top" style={{width:'50%'}} src={imagen} />
              </div>

              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem deleniti asperiores, 
                  in repellendus suscipit, omnis eius illum officiis repudiandae facere voluptas, assumenda nesciunt eos enim libero! Officiis, fugiat aperiam?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    */
