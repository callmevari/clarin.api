import React from 'react';
import { hydrate } from 'react-dom';
import Root from '../shared/components/Root';

const props = window.__PRELOAD_STATE__;

hydrate(<Root {...props} />, document.getElementById('root-app'));
