/*import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormModal = ({ show, handleClose, handleSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Competencias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formNombreCompetencia">
              <Form.Label>Nombre de competencia</Form.Label>
              <Form.Control type="text" placeholder="Introduce el nombre de la competencia" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" defaultValue="">
                <option value="" disabled>Selecciona el estado</option>
                <option value="En curso">En curso</option>
                <option value="Programada">Programada</option>
                <option value="Finalizada">Finalizada</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-12" controlId="formNombreSede">
              <Form.Label>Nombre de sede</Form.Label>
              <Form.Control type="text" placeholder="Introduce el nombre de la sede" />
            </Form.Group>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

FormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormModal;
*/

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormModalCompetencia = ({ show, handleClose, handleSubmit, currentCompetencia, actualizo}) => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    estado: '',
    sede: ''
  });

  const [actualizar , setActualizar] = useState(true)

  useEffect(() => {
    if (currentCompetencia) {
      setFormValues({
        nombre: currentCompetencia.nombre || '',
        estado: currentCompetencia.estado || '',
        sede: currentCompetencia.sede || ''
      });
    }
  }, [currentCompetencia]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Competencias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formNombreCompetencia">
              <Form.Label>Nombre de competencia</Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Introduce el nombre de la competencia"
                value={formValues.nombre}
                onChange={handleChange}
                autoFocus
              />
          
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                as="select"
                name="estado"
                value={formValues.estado}
                onChange={handleChange}
              >
                <option value="" disabled>Selecciona el estado</option>
                <option value="En curso">En curso</option>
                <option value="Programada">Programada</option>
                <option value="Finalizada">Finalizada</option>
              </Form.Control>
            </Form.Group>
    
          </div>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

FormModalCompetencia.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  currentCompetencia: PropTypes.object
};

export default FormModalCompetencia;
