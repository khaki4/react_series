import { fork } from 'redux-saga/effects';
import countSaga from "./count/countSaga";

const sagas = [
  ...countSaga,
]

export default function* root() {
  yield sagas.map(saga => fork(saga));
}