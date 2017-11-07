
import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './css/common.css';

import Main from './pages/main';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
