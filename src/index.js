import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Mindset from './containers/App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Mindset />, document.getElementById('root'));
registerServiceWorker();
