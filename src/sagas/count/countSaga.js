import { call, put, take } from 'redux-saga/effects';
import * as fromReducer from '../../reducers/rootReducer'
import * as APIs from '../../APIs/asyncIncrease'

export function* asyncIncrease1(action) {
  yield put(fromReducer.setShowingBtn([true, false, false]))
  const res = yield call(APIs.increaseCount1, action)
  yield put(fromReducer.increaseCount1(res))
}
export function* asyncIncrease2(action) {
  yield put(fromReducer.setShowingBtn([true, true, false]))
  const res = yield call(APIs.increaseCount2, action)
  yield put(fromReducer.increaseCount2(res))
}
export function* asyncIncrease3(action) {
  yield put(fromReducer.setShowingBtn([true, true, true]))
  const res = yield call(APIs.increaseCount3, action)
  yield put(fromReducer.increaseCount3(res))
}
export function* increaseCount() {
  yield call(asyncIncrease1, 1)
  yield call(asyncIncrease2, 1)
  yield call(asyncIncrease3, 1)
}

export function* watchIncreaseConsequent() {
  while (true) {
    yield take(fromReducer.REQUEST_CONSEQUENT_INCREASE);
    yield call(increaseCount);
  }
}

export default [
  watchIncreaseConsequent
]