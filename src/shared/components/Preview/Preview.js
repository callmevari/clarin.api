import React from 'react';  

const Preview = ({ holiday, onClickEditHandler }) => {

  // move this to the util folder
  // change to an object like ListComponent (Main.js)
  const returnMonth = (month) => {
    switch(month) {
      case 1: return 'Enero';
      case 2: return 'Febrero';
      case 3: return 'Marzo';
      case 4: return 'Abril';
      case 5: return 'Mayo';
      case 6: return 'Junio';
      case 7: return 'Julio';
      case 8: return 'Agosto';
      case 9: return 'Septiembre';
      case 10: return 'Octubre';
      case 11: return 'Noviembre';
      case 12: return 'Diciembre';
    }
  };

  return (
    <div className="preview">
      <b style={{ color: '#de1b2f', alignSelf: 'center' }}>DETALLE DE FERIADO</b><hr />
      <span><b>Día:</b> {holiday.dia}</span>
      <span><b>Mes:</b> {returnMonth(holiday.mes)}</span>
      <span><b>Motivo:</b> {holiday.motivo}</span>
      <span><b>Tipo:</b> {holiday.tipo}</span>
      <span><b>Info:</b> <a href={holiday.info} target="_blank">Click aquí</a></span>
      {holiday.opcional && <span><b>Opcional:</b> {holiday.opcional}</span>}
      {holiday.origen && <span><b>Origen:</b> {holiday.origen}</span>}
      {holiday.religion && <span><b>Religion:</b> {holiday.religion}</span>}
      <br />
      <button className="btn" onClick={() => onClickEditHandler(holiday)}>EDITAR</button>
    </div>
  );  
};  

export default Preview; 
