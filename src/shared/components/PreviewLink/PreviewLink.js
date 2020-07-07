import React from 'react';

const PreviewLink = ({ day, month, id, year, onClick }) => {
  return (
    <a
      data-id={id}
      data-day={day}
      data-month={month}
      data-year={year}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <i className='fa fa-eye' style={{ marginRight: '10px' }} /> 
    </a>
  );
};

export default PreviewLink;
