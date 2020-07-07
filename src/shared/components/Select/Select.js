import React from 'react';

const Select = ({ text, onChangeHandler, holidays }) => {
  return (
    <div className="form-select">
      <h3>{text}: </h3>
      <select onChange={onChangeHandler}>
        {holidays.year.map(each => <option key={each._id}>{each.year}</option>)}
      </select>
    </div>
  );
};

export default Select;
