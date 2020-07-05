import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import './Root.scss';

const Root = () => (
  <React.Fragment>
    <Header />
    <Navbar />
    <Main />
  </React.Fragment>
);

export default Root;
