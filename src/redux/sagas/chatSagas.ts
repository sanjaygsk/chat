import { put, takeLatest, all } from 'redux-saga/effects';
import { getRequest, postRequest, putRequest, deleteRequest } from '../../helpers/api.helper'
import CommonType from '../constants/common.constants'

function* fetchNews(){
    const json = yield getRequest("https://jsonplaceholder.typicode.com/todos/3")
    yield put({ type: CommonType.SUCCESS, json: json });
}

export function* chatSagas() {
    yield takeLatest(CommonType.REQ, fetchNews)
};