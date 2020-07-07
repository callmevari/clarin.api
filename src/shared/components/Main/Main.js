import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';
import List from '../List/List';
import Preview from '../Preview/Preview';

const Main = ({ holidays }) => {

  const [view, setView] = useState('List');
  const [year, setYear] = useState(2011);
  const [holiday, setHoliday] = useState({});

  // componentDidMount();
  useEffect(() => {
  }, []);

  // componentDidUpdate();
  useEffect(() => {
  });

  const onChangeSelectHandler = (e) => {
    console.log('select changed');
    setYear(e.target.value);
    setView('List');
  };

  const onChangeCheckboxHandler = () => {
    console.log('checkbox changed');
  };

  const onClickPreviewHandler = (e) => {
    const element = e.currentTarget.attributes;
    setHoliday({
      id: element['data-id'].value,
      day: element['data-day'].value,
      month: element['data-month'].value,
      year
    })
    setView('Preview');
  };

  return (
    <main>
      <Title text="Feriados" />
      <Checkbox text="Formato mensual" onChangeHandler={onChangeCheckboxHandler} />
      <Select text="Año" onChangeHandler={onChangeSelectHandler} holidays={holidays} />
      {
        view === 'List' && 
        <List 
          holidays={holidays} 
          year={year} 
          onClickPreviewHandler={onClickPreviewHandler} 
        />
      }
      {
        view === 'Preview' &&
        <Preview holiday={holiday} />
      }
    </main>
  );
};

export default Main;