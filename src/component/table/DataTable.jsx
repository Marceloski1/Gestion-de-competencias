
import React from 'react';
import Table from 'react-bootstrap/Table';

function DataTable({ jsonFile }) {
  const { headers, rows } = jsonFile;

  return (
    <Table responsive striped bordered hover variant='dark'>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
