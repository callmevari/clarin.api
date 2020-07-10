import React, { Fragment } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import './Root.scss';

const Root = ({ holidays }) => (
  <Fragment>
    <Header />
    <Navbar />
    <Main holidays={holidays} />
  </Fragment>
);

export default Root;
