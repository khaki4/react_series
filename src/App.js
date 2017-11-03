import React from 'react';
import { connect } from 'react-redux'
import { increaseAsync, increaseCount } from './reducers/rootReducer'

const App = (props) => {
  const increaseCnt = () => props.increaseCount(1)
  return (
    <div className="App">
      <button onClick={increaseCnt}>{props.count}</button>
    </div>
  )
}

export default connect(
  (state) => ({
    count: state.count,
  }),
  { increaseAsync, increaseCount }
)(App)
