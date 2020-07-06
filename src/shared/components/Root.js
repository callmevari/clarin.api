import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import './Root.scss';

const Root = ({ holidays }) => (
  <React.Fragment>
    <Header />
    <Navbar />
    <Main holidays={holidays} />
  </React.Fragment>
);

export default Root;
