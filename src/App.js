import React from 'react';
import { connect } from 'react-redux'
import { requestConsequentIncrease } from './reducers/rootReducer'

const App = (props) => {
  const increaseCnt = () => props.requestConsequentIncrease()
  return (
    <div className="App">
      <div className={props.showingBtn[0] ? '' : 'blind'}>
        <p>button1</p>
        <button onClick={increaseCnt}>{props.count1}</button>
      </div>
      <div className={props.showingBtn[1] ? '' : 'blind'}>
        <p>button2</p>
        <button>{props.count2}</button>
      </div>
      <div className={props.showingBtn[2] ? '' : 'blind'}>
        <p>button3</p>
        <button>{props.count3}</button>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    count1: state.count1,
    count2: state.count2,
    count3: state.count3,
    showingBtn: state.showingBtn,
  }),
  { requestConsequentIncrease }
)(App)
