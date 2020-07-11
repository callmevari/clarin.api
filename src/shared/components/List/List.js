import React from 'react';
import Icon from '../Icon/Icon';

const List = ({ holidays, year, onClickPreviewHandler, onClickEditHandler }) => {

  const listHolidays = () => {
    const byYear = holidays.find((each) => each.year == year);
    const list = byYear.holidays.map((each, index) => {
      return (
        <React.Fragment key={index}>
          <span>{returnMonth(each.mes)}</span>
          <span>{each.dia}</span>
          <span style={{ borderRight: '1px solid black' }}>
            <Icon holiday={each} index={index} onClick={onClickPreviewHandler} icon='eye' />
            <Icon holiday={each} index={index} onClick={onClickEditHandler} icon='pencil' />
          </span>
        </React.Fragment>
      );
    });
    return list;
  };

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
      {listHolidays()}
    </div>
  );
};

export default List;
