import React from 'react';

const Icon = ({ holiday, index, onClick, icon }) => {
  return (
    <a
      onClick={() => onClick(holiday, index)}
      style={{ cursor: 'pointer' }}
    >
      <i className={`fa fa-${icon}`} style={{ marginRight: '10px' }} /> 
    </a>
  );
};

export default Icon;
