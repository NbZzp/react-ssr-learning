import {
  takeLatest,
  takeEvery,
  call,
  put,
  all
} from 'redux-saga/effects'
import api from '../api/api'
import {AddNumberTypes} from '../redux/addReducer'

export function* getAddNumber(api, actions) {
  try {
    const data = yield call(api.getNumber,actions)
    const {number} = data.data
    return yield put({type: 'ADD_NUMBER_SUC',number})
  } catch (err) {

    return yield put({
      type: 'ADD_NUMBER_FAILURE'
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(AddNumberTypes.ADD_NUMBER_REQ, getAddNumber,api)
  ])

}