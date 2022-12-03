import { put, takeLatest } from 'redux-saga/effects';
import { getRequest } from '../../helpers/api.helper'
import CommonType from '../constants/common.constants'

function* fetchNews(){
    const json = getRequest("https://jsonplaceholder.typicode.com/todos/3")
    yield put({ type: CommonType.SUCCESS, json: json });
}

export function* chatSagas() {
    yield takeLatest(CommonType.REQ, fetchNews)
};