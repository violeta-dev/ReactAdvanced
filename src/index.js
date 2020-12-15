import React from 'react';
import ReactDOM from 'react-dom';


import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
//import App from './components/App';

//New
import App, { Root } from './components/App';
import { configureStore } from './store';


// Read token from storage
const { token } = storage.get('auth') || { id: null, token: null };


// Configure api client
configureClient(token);

//const store = configureStore();
const store = configureStore({ auth: token });



const render = () => {
  ReactDOM.render(
    <Root>
      <App dispatch={store.dispatch} loggedUserId={store.getState().auth} />
    </Root>,
    document.getElementById('root')
  );
};


store.subscribe(render);
render();
