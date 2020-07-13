import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Select from '../Select/Select';
import List from '../List/List';
import Preview from '../Preview/Preview';
import Edit from '../Edit/Edit';

const Main = ({ err, holidays }) => {
  const [view, setView] = useState('List');
  const [year, setYear] = useState(2011);
  const [holiday, setHoliday] = useState({});
  const [error, setError] = useState(false);

  // componentDidMount()
  useEffect(() => {
    if (err) setError(true);
  }, []);

  const onChangeSelectHandler = (e) => {
    setYear(e.target.value);
    setView('List');
  };

  const onClickGoBackHandler = (e) => {
    setView('List');
  };

  const onClickPreviewHandler = (holiday) => {
    setHoliday({ ...holiday });
    setView('Preview');
  };

  const onClickEditHandler = (holiday) => {
    setHoliday({ ...holiday });
    setView('Edit');
  };

  const onClickSaveHandler = async (holiday, day, month) => {
    try {
      const response = await axios.put(`/api/feriados/${parseInt(year)}/${parseInt(month)}/${parseInt(day)}`, { ...holiday });
      if (response.status == 200) window.location.replace("/");
    } catch (err) {
      return console.log(err);
    }
  };

  const ViewComponent = {
    List: <List
      holidays={holidays}
      year={year}
      onClickPreviewHandler={onClickPreviewHandler}
      onClickEditHandler={onClickEditHandler}
    />,
    Preview: <Preview 
      holiday={holiday}
      onClickEditHandler={onClickEditHandler}
      onClickGoBackHandler={onClickGoBackHandler}
    />,
    Edit: <Edit 
      holiday={holiday}
      onClickSaveHandler={onClickSaveHandler}
      onClickGoBackHandler={onClickGoBackHandler}
    />,
  };

  return (
    <main>
      {!err && 
        <Fragment>
          <Select text="Año" onChangeHandler={onChangeSelectHandler} holidays={holidays} />
          {ViewComponent[view] || 'Loading view...'}
        </Fragment>
      }
      {error && <div className="errorLabel" dangerouslySetInnerHTML={{ __html: err }} />}
    </main>
  );
};

export default Main;
