import React from 'react';

const Checkbox = ({ text, onChangeHandler }) => <div>{text}: <input type="checkbox" onChange={onChangeHandler} /></div>;

export default Checkbox;