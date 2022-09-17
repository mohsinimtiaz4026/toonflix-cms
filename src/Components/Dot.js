import React from 'react';

const Dot = ({colors}) => {
  return (
    <div style={{
        width: '7px',
        height: '7px',
        borderRadius: '7px',
        background: colors,
        marginRight: '5px'
    }} />
  );
}

export default Dot;