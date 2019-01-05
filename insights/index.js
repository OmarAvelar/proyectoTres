import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import App from './src/App';
import * as serviceWorker from './src/serviceWorker';
import 'bulma';
import { BrowserRouter } from 'react-router-dom'

const WithRouter = () => <BrowserRouter><App/></BrowserRouter>

ReactDOM.render(<WithRouter />, document.getElementById('root'));

serviceWorker.unregister();



// import React from 'react';
// import App from './src/containers/App';




// React.render(
//   <App />,
//   document.getElementById('root')
// );
