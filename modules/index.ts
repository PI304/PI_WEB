import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
