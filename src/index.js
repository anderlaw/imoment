import React from 'react';
import ReactDOM from 'react-dom';

//引入common css第三方资源
import '@/common/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
