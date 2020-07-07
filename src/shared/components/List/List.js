import React from 'react';

const List = () => {
  return (
    <div className='grid'>
      <span>
        <strong>Mes</strong>
      </span>
      <span>
        <strong>Día</strong>
      </span>
      <span style={{ borderRight: '1px solid black' }}>
        <strong>Acción</strong>
      </span>
    </div>
  );
};

export default List;
