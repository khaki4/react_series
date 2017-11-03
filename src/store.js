// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducers/backup_rootReducer'
//
// export default createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// )


import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/rootReducer'
import rootSaga from './sagas/sagaIndex'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)