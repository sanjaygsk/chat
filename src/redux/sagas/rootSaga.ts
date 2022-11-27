import { all, fork } from 'redux-saga/effects';
import { userSagas } from './userSagas';
import { chatSagas } from './chatSagas';

export default function* rootSaga() {
  yield all([
    fork (userSagas),
    fork (chatSagas),
  ]);
}