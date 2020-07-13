import React, { Fragment, useState } from 'react';
import GoBack from '../GoBack/GoBack';

const Edit = ({ holiday, onClickSaveHandler, onClickGoBackHandler }) => {
  const [state, setState] = useState({
    ...holiday
  });

  return (
    <Fragment>
      <GoBack onClick={onClickGoBackHandler} />
      <div className="preview">
        <b style={{ color: '#de1b2f', alignSelf: 'center' }}>EDITAR FERIADO</b><hr />
        <span>
          <b>Día: </b> 
          <input 
            type="number" 
            style={{ width: '35px' }} 
            value={state.dia} 
            onChange={e => setState({ ...state, dia: e.currentTarget.value })} 
          />
        </span>

        <span>
          <b>Mes: </b> 
          <input 
            type="number" 
            style={{ width: '35px' }} 
            value={state.mes} 
            onChange={e => setState({ ...state, mes: e.currentTarget.value })} 
          />
        </span>

        <span>
          <b>Motivo: </b> 
          <input 
            type="text" 
            value={state.motivo} 
            onChange={e => setState({ ...state, motivo: e.currentTarget.value })} 
          />
        </span>
        
        <span>
          <b>Tipo: </b> 
          <input 
            type="text" 
            value={state.tipo} 
            onChange={e => setState({ ...state, tipo: e.currentTarget.value })} 
          />
        </span>

        <span>
          <b>Link: </b> 
          <input 
            type="text" 
            value={state.info} 
            onChange={e => setState({ ...state, info: e.currentTarget.value })} 
          />
        </span>

        {state.opcional &&
          <span>
            <b>Opcional: </b> 
            <input 
              type="text" 
              value={state.opcional} 
              onChange={e => setState({ ...state, opcional: e.currentTarget.value })} 
            />
          </span>
        }
        
        {state.origen &&
          <span>
            <b>Origen: </b> 
            <input 
              type="text" 
              value={state.origen} 
              onChange={e => setState({ ...state, origen: e.currentTarget.value })} 
            />
          </span>
        }
      
        {state.religion &&
          <span>
              <b>Religion: </b> 
              <input 
                type="text" 
                value={state.religion} 
                onChange={e => setState({ ...state, religion: e.currentTarget.value })} 
              />
            </span>
        }
        <br />
        <button className="btn" onClick={() => onClickSaveHandler(state, holiday.dia, holiday.mes)}>GUARDAR</button>
      </div>
    </Fragment>
  );  
};  

export default Edit; 
