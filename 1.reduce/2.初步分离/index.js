import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { counter, addGun, removeGun } from './index.redux';

const store = createStore(counter)

function render() {
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun}/>, document.getElementById('root'));
}
render()
store.subscribe(render)