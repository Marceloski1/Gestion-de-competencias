/*import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css'

const AtletaCard = ({ atleta }) => (
  <Card className='card-hover text-center' style={{ width: '20rem', height:'9rem' ,  background:'rgb(100, 120, 250)' }}>
    <Card.Body>
      <Card.Title>{`${atleta.nombre} ${atleta.apellido}`}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{`Categoría: ${atleta.categoria}`}</Card.Subtitle>
      <Card.Text >
        {`Edad: ${atleta.edad} \n Sexo: ${atleta.sexo} \nContacto: ${atleta.contacto}`}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default AtletaCard;
*/
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Card.css';
; import { useButtonVisibility } from './../../../hooks/ButtonVisibilityContext'; 

const AtletaCard = ({ atleta, onEdit, onDelete }) => {
  const { showButtons } = useButtonVisibility();
  
 return(
 <Card className='card-hover' style={{ background: 'rgb(100, 120, 250)' }}>
    <Card.Body>
      <Card.Title>{`${atleta.nombre} ${atleta.apellido}`}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted primary">{`Categoría: ${atleta.categoria}`}</Card.Subtitle>
      <Card.Text>
        {`Edad: ${atleta.edad} \nSexo: ${atleta.sexo} \nContacto: ${atleta.contacto}`}
      </Card.Text>
      {console.log(showButtons)}
      {true && ( 
        <> 
        <Button variant="warning" onClick={onEdit} className="mx-3">Editar</Button>
         <Button variant="danger" onClick={onDelete}>Eliminar</Button>
          </>
         )}
    </Card.Body>
  </Card>
 )
};

export default AtletaCard;
