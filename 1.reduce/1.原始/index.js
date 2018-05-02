import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function counter(state = 0, action) {
    switch(action.type) {
        case '加机关枪': 
            return state + 1
        case '减机关枪':
            return state - 1
        default:
            return 10
    }
}
const store = createStore(counter)

// 每次状态改变 触发listen
function listener() {
    const current = store.getState()
    console.log(`现在有机关枪${current}把`)
}
// 订阅
store.subscribe(listener)
// 派发事件 传递action
store.dispatch({type:'加机关枪'})
store.dispatch({type:'加机关枪'})
store.dispatch({type:'减机关枪'})
store.dispatch({type:'加机关枪'})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
