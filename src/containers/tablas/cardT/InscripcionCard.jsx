/*import React from 'react';
import Card from 'react-bootstrap/Card';

const InscripcionCard = ({ inscripcion }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{`Atleta: ${inscripcion.idAtleta}`}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{`Competencia: ${inscripcion.idCompetencia}`}</Card.Subtitle>
      <Card.Text>
        {`Fecha Inicio: ${inscripcion.fechaInicio} \nFecha Final: ${inscripcion.fechaFinal} \nResultado: ${inscripcion.resultado}`}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default InscripcionCard;
*/

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';
import './Card.css';

const InscripcionCard = ({ inscripcion, onEdit, onDelete }) => (
  <Card className='card-hover' >
    <Card.Body>
      <Card.Title>{`Atleta: ${inscripcion.idAtleta}\n Competencia: ${inscripcion.idCompetencia}` }</Card.Title>
      <Card.Text className='mb-0'>
        {`Fecha Inicio: ${inscripcion.fechaInicio} \nFecha Final: ${inscripcion.fechaFinal} \nResultado: ${inscripcion.resultado}`}
      </Card.Text>
      <Button variant="warning" onClick={onEdit} className="mx-3">Editar</Button>
      <Button variant="danger" onClick={onDelete}>Eliminar</Button>
    </Card.Body>
  </Card>
);

export default InscripcionCard;

/*
InscripcionCard.propTypes = { 
  onEdit: PropTypes.bool.isRequired,
  onDelete: PropTypes.bool.isRequired, 
    inscripcion: PropTypes.object };

    Las validation props estan bien  pero  el navegador dice que se debe recibir una funcion en lugar de  un boo */ 