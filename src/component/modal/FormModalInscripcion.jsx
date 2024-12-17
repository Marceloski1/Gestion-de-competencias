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
        <Modal.Title>Inscripciones</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formNombreAtleta">
              <Form.Label>Nombre atleta</Form.Label>
              <Form.Control type="text" placeholder="Introduce el nombre del atleta" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formNombreCompetencia">
              <Form.Label>Nombre competencia</Form.Label>
              <Form.Control type="text" placeholder="Introduce el nombre de la competencia" />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formFechaInicio">
              <Form.Label>Fecha inicio</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formFechaFinal">
              <Form.Label>Fecha final</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-12" controlId="formResultado">
              <Form.Label>Resultado</Form.Label>
              <Form.Control as="select" defaultValue="">
                <option value="" disabled>Selecciona el resultado</option>
                <option value="Ganado">Ganado</option>
                <option value="Perdido">Perdido</option>
                <option value="Empate">Empate</option>
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

const FormModalInscripcion = ({ show, handleClose, handleSubmit, currentInscripcion }) => {
  const [formValues, setFormValues] = useState({
    idAtleta: '',
    idCompetencia: '',
    fechaInicio: '',
    fechaFinal: '',
    resultado: ''
  });

  useEffect(() => {
    if (currentInscripcion) {
      setFormValues({
        idAtleta: currentInscripcion.idAtleta || '',
        idCompetencia: currentInscripcion.idCompetencia || '',
        fechaInicio: currentInscripcion.fechaInicio || '',
        fechaFinal: currentInscripcion.fechaFinal || '',
        resultado: currentInscripcion.resultado || ''
      });
    }
  }, [currentInscripcion]);

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
        <Modal.Title>Inscripciones</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formNombreAtleta">
              <Form.Label>Nombre atleta</Form.Label>
              <Form.Control
                name="idAtleta"
                type="number"
                placeholder="Introduce el ID del atleta"
                value={formValues.idAtleta}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formNombreCompetencia">
              <Form.Label>Nombre competencia</Form.Label>
              <Form.Control
                name="idCompetencia"
                type="number"
                placeholder="Introduce el ID de la competencia"
                value={formValues.idCompetencia}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formFechaInicio">
              <Form.Label>Fecha inicio</Form.Label>
              <Form.Control
                name="fechaInicio"
                type="date"
                value={formValues.fechaInicio}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formFechaFinal">
              <Form.Label>Fecha final</Form.Label>
              <Form.Control
                name="fechaFinal"
                type="date"
                value={formValues.fechaFinal}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-12" controlId="formResultado">
              <Form.Label>Resultado</Form.Label>
              <Form.Control
                as="select"
                name="resultado"
                value={formValues.resultado}
                onChange={handleChange}
              >
                <option value="" disabled>Selecciona el resultado</option>
                <option value="Ganado">Ganado</option>
                <option value="Perdido">Perdido</option>
                <option value="Empate">Empate</option>
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

FormModalInscripcion.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  currentInscripcion: PropTypes.object
};

export default FormModalInscripcion;
