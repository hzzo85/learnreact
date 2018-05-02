import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入thunk 和 applyMiddleware 中间件实现异步, compose 调试相关
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { counter } from './index.redux';
import { Provider } from 'react-redux'
// 放入中间件实现异步操作
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
    ReactDOM.render(
        (<Provider store={store}>
            <App />
        </Provider>), 
        document.getElementById('root')
    )