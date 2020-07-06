import React from 'react';

const Select = ({ text, onChangeHandler, holidays }) => {
  return (
    <div className="form-select">
      {text}: 
      <select onChange={onChangeHandler}>
        {holidays.year.map(each => <option key={each._id}>{each.year}</option>)}
      </select>
    </div>
  );
};

export default Select;
