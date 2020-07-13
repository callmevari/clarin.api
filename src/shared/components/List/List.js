import React, { Fragment } from 'react';
import Icon from '../Icon/Icon';
import returnMonth from '../../utils/returnMonth';

const List = ({ holidays, year, onClickPreviewHandler, onClickEditHandler }) => {

  const headerStyle = {
    backgroundColor: 'black', 
    color: 'white', 
    fontWeight: 'bold',
    borderRight: '1px solid white'
  };

  const listHolidays = () => {
    const find = holidays.find((each) => each.year == year);
    const list = find.holidays.map((each, index) => {
      return (
        <Fragment key={index}>
          <span>{returnMonth(each.mes)}</span>
          <span>{each.dia}</span>
          <span style={{ borderRight: '1px solid black' }}>
            <Icon holiday={each} onClick={onClickPreviewHandler} icon='eye' />
            <Icon holiday={each} onClick={onClickEditHandler} icon='pencil' />
          </span>
        </Fragment>
      );
    });
    return list;
  };

  return (
    <div className='grid'>
      <span style={headerStyle}>
        <strong>Mes</strong>
      </span>
      <span style={headerStyle}>
        <strong>Día</strong>
      </span>
      <span style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', borderRight: '1px solid black' }}>
        <strong>Acción</strong>
      </span>
      {listHolidays()}
    </div>
  );
};

export default List;
