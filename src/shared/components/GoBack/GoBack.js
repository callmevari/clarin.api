import React from 'react';

const GoBack = ({ onClick }) => {
  return (
    <div>
      <a onClick={onClick} style={{ cursor: 'pointer' }}>
        <i className='fa fa-arrow-circle-left' style={{ fontSize: '2em', color: '#de1b2f' }}></i>
      </a>
    </div>
  );
};

export default GoBack;
