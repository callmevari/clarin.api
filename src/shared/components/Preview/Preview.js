import React, { Fragment } from 'react';  
import GoBack from '../GoBack/GoBack';
import returnMonth from '../../utils/returnMonth';

const Preview = ({ holiday, onClickEditHandler, onClickGoBackHandler }) => {
  return (
    <Fragment>
      <GoBack onClick={onClickGoBackHandler} />
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
    </Fragment>
  );  
};  

export default Preview; 
