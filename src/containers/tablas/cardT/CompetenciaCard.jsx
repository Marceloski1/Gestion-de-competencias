/*import React from 'react';
import Card from 'react-bootstrap/Card';

const CompetenciaCard = ({ competencia }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{competencia.nombre}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{`Estado: ${competencia.estado}`}</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default CompetenciaCard;
*/
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Card.css';

const CompetenciaCard = ({ competencia, onEdit, onDelete , edi}) => {
 
  return(
  <Card className='card-hover' style={{background: 'rgb(100, 120, 250)' }}>
    <Card.Body>
      <Card.Title className='mt-5'>{competencia.nombre}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{`Estado: ${competencia.estado}`}</Card.Subtitle>
      <Button variant="warning" onClick={onEdit} className="mx-3">Editar</Button>
      <Button variant="danger" onClick={onDelete}>Eliminar</Button>
    </Card.Body>
  </Card>
);
}
export default CompetenciaCard;
