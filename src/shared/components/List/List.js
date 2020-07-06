import React from 'react';

const List = ({ holidays, year }) => {
  return (
    <div className='form-list'>
      {
        holidays.year.map(each => {
          if (each.year === year) {
            for (let key in each) {
              if (key !== '_id' & key !== 'year') console.log(each[key]);
            }
          }
        })
      }
    </div>
  );
};

export default List;
