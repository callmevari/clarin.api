import React, { useState } from 'react';
import Title from '../Title/Title';
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';
import List from '../List/List';

const Main = ({ holidays }) => {

  const [year, setYear] = useState(2011);

  const onChangeSelectHandler = (e) => {
    console.log('select changed');
    setYear(e.target.value);
  };

  const onChangeCheckboxHandler = () => {
    console.log('checkbox changed');
  };

  return (
    <main>
      <Title text="Feriados" />
      <Checkbox text="Formato mensual" onChangeHandler={onChangeCheckboxHandler} />
      <Select text="Año" onChangeHandler={onChangeSelectHandler} holidays={holidays} />
      <List holidays={holidays} year={year} />
    </main>
  );
};

export default Main;
