import React, { useState, useEffect } from 'react';  

const Edit = ({ holiday, onClickSaveHandler }) => {

  const [state, setState] = useState({
    ...holiday
  });

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
  );  
};  

export default Edit; 
