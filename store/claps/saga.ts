// store/sagas.js
import { PayloadAction } from '@reduxjs/toolkit';
import { ForkEffect, call, put, takeLatest } from 'redux-saga/effects';
import { getAllClaps, incrementClap as incrementClapAPI } from '../../services/clap';
import { addClaps, getClaps, incrementClap, incrementClapFailure, incrementClapSuccess } from './slice';

function* getClapsSaga() {
  try {
    const claps = yield call(getAllClaps);
    yield put(addClaps(claps));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function* incrementClapSaga(action: PayloadAction<string>) {
  try {
    yield call(incrementClapAPI, action.payload);

    yield put(incrementClapSuccess({ slug: action.payload }));
  } catch (error) {
    console.error('Error incrementing clap:', error);
    yield put(incrementClapFailure({ slug: action.payload }));
  }
}

function* clapSaga():Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(getClaps.type, getClapsSaga);
  yield takeLatest(incrementClap.type, incrementClapSaga);
}

export default clapSaga;
