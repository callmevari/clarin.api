import React from 'react';

const List = ({ holidays, year }) => {

  const listHolidays = () => {
    let holidaysArray = [];

    const list = holidays.year.map((each, index) => {
      if (each.year == year) {
        
        for (let key in each) {
          if (key !== 'year' & key !== '_id') {
            let row = each[key];
            holidaysArray.push({
              day: row.dia,
              month: row.mes,
              id: row.id,
            });
          }
        }

        return holidaysArray.map((each, index) => {
          console.log(each.id);
          return (
            <React.Fragment key={index}>
              <span>{returnMonth(each.month)}</span>
              <span>{each.day}</span>
              <span style={{ borderRight: '1px solid black' }}>
                <a href="#">
                  <i className='fa fa-eye' style={{ marginRight: '10px' }} /> 
                </a>
                <a href="#">
                  <i className='fa fa-pencil' />
                </a>
              </span>
            </React.Fragment>
          );
        })
      }
    });

    return list;
  };

  // move this to the util folder
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
