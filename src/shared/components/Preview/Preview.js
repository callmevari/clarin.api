import React from 'react';  

const Preview = ({ holiday }) => {
  const { id, day, month, year } = holiday;
  return (
    <div className="preview">
      <b>Día: </b>
    </div>
  );  
};  

export default Preview; 
