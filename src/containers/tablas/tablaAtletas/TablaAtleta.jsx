import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useModal from './../../../hooks/useModal.js';
import FormModal from '../../../component/modal/FormModalAtleta.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardChangeR from '../../../component/cardChange/CardChangeL.jsx';
import atleta from './../../../assets/img//noIcons/GrupoA.png' 
import atletaCard from './../../../jsonPrueba/Atletas.json';
import AtletaCard from '../cardT/AtletaCard.jsx';
import './TablaAtleta.css'
import { Form } from 'react-bootstrap';
const TablaAtleta = () => {
  const [atletas, setAtletas] = useState(() => {
    const savedAtletas = localStorage.getItem('atletas');
    return savedAtletas ? JSON.parse(savedAtletas) : atletaCard;
  });
  const { show, handleShow, handleClose } = useModal();
  const [currentAtleta, setCurrentAtleta] = useState(null);

  /*const [searchTerm, setSearchTerm] = useState('');  //aaaaaa

  const handleSearch = (event) => {  //aaaaaaaaaa
    setSearchTerm(event.target.value);
  };

  const filteredAtletas = atletas.filter(atleta => //aaaaaaaaaa
    `${atleta.nombre} ${atleta.apellido}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  {filteredAtletas.map((atleta, index) => (       //aaaaaaa
    <Col key={index} xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center align-items-center">
      <AtletaCard atleta={atleta} onEdit={() => handleEdit(atleta)} onDelete={() => handleDelete(atleta.id)} />
    </Col>
  ))}
  */
  useEffect(() => {
    localStorage.setItem('atletas', JSON.stringify(atletas));
  }, [atletas]);

  const handleSubmit = (formData) => {
    const newAtleta = {
      id: currentAtleta ? currentAtleta.id : atletas.length + 1,
      ...formData
    };

    if (currentAtleta) {
      const updatedAtletas = atletas.map(atleta =>
        atleta.id === currentAtleta.id ? newAtleta : atleta
      );
      setAtletas(updatedAtletas);
    } else {
      setAtletas([...atletas, newAtleta]);
    }

    setCurrentAtleta(null);
    handleClose();
  };

  const handleEdit = (atleta) => {
    setCurrentAtleta(atleta);
    handleShow();
  };

  const handleDelete = (id) => {
    const updatedAtletas = atletas.filter(atleta => atleta.id !== id);
    setAtletas(updatedAtletas);
  };

  return (
  

    <div className=' container'>
       
     <div className=' d-flex align-items-center flex-column gap-5'>
    
     <CardChangeR
      imageSrc={atleta}
               title="Conoce a nuestros atletas"
               text="En esta sección podrás revisar la información de nuestros atleta"
               
     />
     <Button variant="primary mx-3 my-3" onClick={handleShow}>
        Insertar
      </Button>
     {/*
      <Container className='w-100 h-100'>
       <Form.Control type="text" placeholder="Buscar por nombre" value={searchTerm} onChange={handleSearch} className="mb-4" /> 
       <Row className='d-flex justify-content-center align-items-center'> {filteredAtletas.map((atleta, index) =>
        ( <Col key={index} xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center align-items-center"> 
        <AtletaCard atleta={atleta} onEdit={() => handleEdit(atleta)} onDelete={() => handleDelete(atleta.id)} /> 

        </Col>
       ))}
         </Row> 
         </Container>
         */
      }
     </div>
     
     
      <Container className='w-100 h-100'>
        <Row className='d-flex justify-content-center align-items-center'>
          {atletas.map((atleta, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center align-items-center">
              <AtletaCard atleta={atleta} onEdit={() => handleEdit(atleta)} onDelete={() => handleDelete(atleta.id)} />
            </Col>
          ))}
        </Row>
      </Container>
    
      
      <FormModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} currentAtleta={currentAtleta} />
    </div>
  );
};

export default TablaAtleta;
