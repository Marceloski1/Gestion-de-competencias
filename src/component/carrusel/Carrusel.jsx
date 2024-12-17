import Carousel from 'react-bootstrap/Carousel';
import boxeadores from './../../assets/img/noIcons/r.png'
import ciclistas from './../../assets/img/noIcons/pelota.png'
import corredor from './../../assets/img/noIcons/voley.png'
import './Carrusel.css'

function Carrusel() {
  return (
    <Carousel className='carousel-container' touch={true} style={{width: '100%' , height:'95%'}}>
      <Carousel.Item interval={500}>
      <img src={boxeadores} alt=""  />
        <Carousel.Caption>
          <h3>Supera tus Límites</h3>
          <p>En cada competencia encontrarás desafíos que pondrán a prueba tu fuerza, tu resistencia y tu mentalidad. Afróntalos con determinación, y el triunfo será tuyo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={ciclistas} alt=""/>
        <Carousel.Caption>
          <h3>La pasión del  deporte  y la superación</h3>
          <p>No se trata solo de ganar, sino de dar lo mejor de ti mismo en cada paso, en cada jugada, y en cada respiración. La verdadera victoria está en nunca rendirse.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={corredor} alt="" />
        <Carousel.Caption>
          <h3>Competir nos une, inspirar nos conecta.</h3>
          <p>
          Cada gota de sudor, cada entrenamiento y cada sacrificio cuentan. ¡Convierte tu dedicación en el mejor rendimiento!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;