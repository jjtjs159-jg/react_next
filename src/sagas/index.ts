import { all } from 'redux-saga/effects';
import { watchMode } from './mode';

export default function* rootSaga() {
  yield all([watchMode()]);
}
