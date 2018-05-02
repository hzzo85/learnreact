import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'
class App extends React.Component{
  render() {
    return (
      <div>
        <h2>现在有机枪{this.props.num}把</h2>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天上交</button>
      </div>
      )
  }
}
const mapStatetoProps  = (state) => {
    return {num:state}
}
const actionCreators = {addGun, removeGun, addGunAsync}
App = connect(mapStatetoProps, actionCreators)(App)
export default App