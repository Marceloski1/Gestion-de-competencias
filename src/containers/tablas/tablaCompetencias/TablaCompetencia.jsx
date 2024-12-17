import  { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useModal from './../../../hooks/useModal.js';
import FormModalCompetencia from '../../../component/modal/FormModalCompetencia.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import competencia from './../../../jsonPrueba/Competencias.json';
import CompetenciaCard from '../cardT/CompetenciaCard.jsx';
import atleta from './../../../assets/img//noIcons/Ajedrez.png'
import CardChange from '../../../component/cardChange/CardChangeL.jsx'; 
import './TablaCompetencia.css'


const TablaCompetencia = () => {
  const [competencias, setCompetencias] = useState(() => {
    const savedCompetencias = localStorage.getItem('competencias');
    return savedCompetencias ? JSON.parse(savedCompetencias) : competencia;
  });
  const { show, handleShow, handleClose } = useModal();
  const [currentCompetencia, setCurrentCompetencia] = useState(null);

  useEffect(() => {
    localStorage.setItem('competencias', JSON.stringify(competencias));
  }, [competencias]);

  const handleSubmit = (formData) => {
    const newCompetencia = {
      id: currentCompetencia ? currentCompetencia.id : competencias.length + 1,
      ...formData
    };

    if (currentCompetencia) {
      const updatedCompetencias = competencias.map(competencia =>
        competencia.id === currentCompetencia.id ? newCompetencia : competencia
      );
      setCompetencias(updatedCompetencias);
    } else {
      setCompetencias([...competencias, newCompetencia]);
    }

    setCurrentCompetencia(null);
    handleClose();
  };

  const handleEdit = (competencia) => {
    setCurrentCompetencia(competencia);
    handleShow();
  };

  const handleDelete = (id) => {
    const updatedCompetencias = competencias.filter(competencia => competencia.id !== id);
    setCompetencias(updatedCompetencias);
  };

  return (
    <div className='gap-3 miTablaC'>
       <div className=' d-flex align-items-center flex-column gap-5'>
        <CardChange
          imageSrc={atleta}
          title="Conoce nuestras competencias"
          text="En esta sección podras conocer el  estado en el que se encuentra tu competencia de preferencia"
        />
      </div>
      <Container className='w-100 h-100'>
        <Row className='d-flex justify-content-center align-items-center'>
          {competencias.map((competencia, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center align-items-center">
              <CompetenciaCard competencia={competencia} onEdit={() => handleEdit(competencia)} onDelete={() => handleDelete(competencia.id)} edi = {true} />
            </Col>
          ))}
        </Row>
      </Container>
      <Button variant="primary mx-3 my-3" onClick={() => handleShow()}>
        Insertar Competencia
      </Button>
      <FormModalCompetencia show={show} handleClose={handleClose} handleSubmit={handleSubmit} currentCompetencia={currentCompetencia} />
    </div>
  );
};

export default TablaCompetencia;
