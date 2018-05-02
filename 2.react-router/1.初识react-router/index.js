import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
// 引入thunk 和 applyMiddleware 中间件实现异步, compose 调试相关
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// react-router
import { BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import { counter } from './index.redux';
// 放入中间件实现异步操作
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
class Test extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <h2>测试组件{this.props.match.params.location}</h2>
    }
}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/:location' component={Test}></Route>
                    <Route path='/erying' component={Erying}></Route>
                    <Route path='/qibinglian' component={Qibinglian}></Route>
                </Switch>
                
            </div>
            
        </BrowserRouter>
    </Provider>), 
    document.getElementById('root')
)