import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useModal from './../../hooks/useModal.js';
import FormModalInscripcion from '../../component/modal/FormModalInscripcion.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import inscripcion from './../../jsonPrueba/Inscripciones.json'
import InscripcionCard from './cardT/InscripcionCard.jsx';
import './tablaCompetencias/TablaCompetencia.css'
import CardChange from './../../component/cardChange/CardChangeL.jsx'
import atleta from './../../assets/img//noIcons/Inscripcion.png'

const Nueva = () => {
  const [inscripciones, setInscripciones] = useState(() => {
    const savedInscripciones = localStorage.getItem('inscripciones');
    return savedInscripciones ? JSON.parse(savedInscripciones) : inscripcion;
  });
  const { show, handleShow, handleClose } = useModal();
  const [currentInscripcion, setCurrentInscripcion] = useState(null);

  useEffect(() => {
    localStorage.setItem('inscripciones', JSON.stringify(inscripciones));
  }, [inscripciones]);

  const handleSubmit = (formData) => {
    const newInscripcion = {
      id: currentInscripcion ? currentInscripcion.id : inscripciones.length + 1,
      ...formData
    };

    if (currentInscripcion) {
      const updatedInscripciones = inscripciones.map(inscripcion =>
        inscripcion.id === currentInscripcion.id ? newInscripcion : inscripcion
      );
      setInscripciones(updatedInscripciones);
    } else {
      setInscripciones([...inscripciones, newInscripcion]);
    }

    setCurrentInscripcion(null);
    handleClose();
  };

  const handleEdit = (inscripcion) => {
    setCurrentInscripcion(inscripcion);
    handleShow();
  };

  const handleDelete = (id) => {
    const updatedInscripciones = inscripciones.filter(inscripcion => inscripcion.id !== id);
    setInscripciones(updatedInscripciones);
  };

  return (
    <div className='gap-3 miTablaC'>
      <div className=' d-flex align-items-center flex-column gap-5'>
        <CardChange
          imageSrc={atleta}
          title="Bienvenido  a nuestras incripciones"
          text="Aquí podras conocer el resultado de tua atleta de preferencia en una competetencia en particular"
        />
      </div>
      <Container className='w-100 h-100'>
        <Row className='d-flex justify-content-center align-items-center'>
          {inscripciones.map((inscripcion, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center align-items-center">
              <InscripcionCard inscripcion={inscripcion} onEdit={() => handleEdit(inscripcion)} onDelete={() => handleDelete(inscripcion.id)} />
            </Col>
          ))}
        </Row>
      </Container>
      <Button variant="primary mx-3 my-3" onClick={() => handleShow()}>
        Insertar Inscripción
      </Button>
      <FormModalInscripcion show={show} handleClose={handleClose} handleSubmit={handleSubmit} currentInscripcion={currentInscripcion} />
    </div>
  );
};

export default Nueva;
