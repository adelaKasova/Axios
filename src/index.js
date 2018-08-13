import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import mainStore from './utility/store';


ReactDOM.render(
	<Provider store={mainStore()}>
	<App />
	</Provider>,
document.getElementById('root')
);