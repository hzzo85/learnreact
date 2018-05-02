import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入thunk 和 applyMiddleware 中间件实现异步
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { counter, addGun, removeGun, addGunAsync } from './index.redux';
// 放入中间件实现异步操作
const store = createStore(counter, applyMiddleware(thunk))

function render() {
    ReactDOM.render(<App store={store} 
                        addGun={addGun} 
                        removeGun={removeGun}
                        addGunAsync={addGunAsync}
                        />, document.getElementById('root'));
}
render()
store.subscribe(render)