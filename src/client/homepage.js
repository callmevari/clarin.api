import React from 'react';
import { hydrate } from 'react-dom';
import Homepage from '../shared/components/Homepage/Homepage';

const props = window.__PRELOAD_STATE__;

hydrate(<Homepage {...props} />, document.getElementById('root-app'));
