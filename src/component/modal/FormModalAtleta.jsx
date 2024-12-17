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
        <Modal.Title>Formulario de Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="nombre" type="text" placeholder="Introduce  el nombre del  atleta" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control name="apellido" type="text" placeholder="Introduce el  apellido  del  atleta" />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formEdad">
              <Form.Label>Edad</Form.Label>
              <Form.Control name="edad" type="number" placeholder="Introduce la edad del attleta" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formSexo">
               <Form.Label>Sexo</Form.Label> <Form.Control as="select" name="sexo" defaultValue=""> 
                <option value="" disabled>Selecciona tu sexo</option> 
                <option value="Masculino">Masculino</option>
                 <option value="Femenino">Femenino</option> </Form.Control> </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formContacto">
              <Form.Label>Contacto</Form.Label>
              <Form.Control name="contacto" type="text" placeholder="Introduce tu contacto" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formCategoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control name="categoria" type="text" placeholder="Introduce la categoría" />
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
import  { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormModal = ({ show, handleClose, handleSubmit, currentAtleta }) => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    sexo: '',
    contacto: '',
    categoria: ''
  });

  useEffect(() => {
    if (currentAtleta) {
      setFormValues({
        nombre: currentAtleta.nombre || '',
        apellido: currentAtleta.apellido || '',
        edad: currentAtleta.edad || '',
        sexo: currentAtleta.sexo || '',
        contacto: currentAtleta.contacto || '',
        categoria: currentAtleta.categoria || ''
      });
    }
  }, [currentAtleta]);

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
        <Modal.Title>Formulario de Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Introduce  el nombre del atleta"
                value={formValues.nombre}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                name="apellido"
                type="text"
                placeholder="Introduce el apellido del atleta"
                value={formValues.apellido}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formEdad">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                name="edad"
                type="number"
                placeholder="Introduce la edad del atleta"
                value={formValues.edad}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formSexo">
              <Form.Label>Sexo</Form.Label>
              <Form.Control
                as="select"
                name="sexo"
                value={formValues.sexo}
                onChange={handleChange}
              >
                <option value="" disabled>Selecciona tu sexo</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col-md-6" controlId="formContacto">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                name="contacto"
                type="text"
                placeholder="Introduce tu contacto"
                value={formValues.contacto}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formCategoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                name="categoria"
                type="text"
                placeholder="Introduce la categoría"
                value={formValues.categoria}
                onChange={handleChange}
              />
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
  currentAtleta: PropTypes.object
};

export default FormModal;
