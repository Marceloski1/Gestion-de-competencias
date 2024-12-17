import React from 'react';

const Box = ({ width, height }) => {
  const boxStyle = {
    width: width,
    height: height,
    backgroundColor: 'lightblue',
  };

  return <div style={boxStyle}>Soy una caja</div>;
};

export default Box ; 