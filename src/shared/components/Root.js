import React, { Fragment } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import './Root.scss';

const Root = ({ err, holidays }) => (
  <Fragment>
    <Header />
    <Navbar />
    <Main err={err} holidays={holidays} />
  </Fragment>
);

export default Root;
