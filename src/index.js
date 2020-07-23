import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Service from './services/swapiApi';
import { ServiceProvider } from './components/context/service-context';
import store from './store';
import 'antd/dist/antd.css';
const service = new Service();

ReactDOM.render(
    <Provider store={store}>
        <ServiceProvider value={service}>
            <App />
        </ServiceProvider>
    </Provider>,
    document.getElementById('root'),
);
