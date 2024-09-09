import { all } from 'redux-saga/effects';
import clapSaga from './claps/saga';

// Import các saga khác nếu cần
function* rootSaga() {
  yield all([
    clapSaga(),
  ]);
}

export default rootSaga;
