import React from 'react';

const Checkbox = ({ text, onChangeHandler }) => <h3>{text}: <input type="checkbox" onChange={onChangeHandler} /></h3>;

export default Checkbox;