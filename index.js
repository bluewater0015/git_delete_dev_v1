
import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './css/common.css';

import Main from './pages/main';
import NoFound from './noFound/noFound';

import registerServiceWorker from './registerServiceWorker';

//我需要添加东西

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
