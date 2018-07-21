import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import './app.scss';

declare let module: any
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept();
 }