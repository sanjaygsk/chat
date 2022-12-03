import { put, takeLatest } from 'redux-saga/effects';
import { getRequest } from '../../helpers/api.helper'
import CommonType from '../constants/common.constants'

function* fetchNews(){
    const json = getRequest("https://jsonplaceholder.typicode.com/todos/2")
    yield put({ type: CommonType.SUCCESS, json: json });
}

function* fetchNews1(){
    const json = getRequest("https://jsonplaceholder.typicode.com/todos/1")
    yield put({ type: CommonType.SUCCESS, json: json });
}

export function* userSagas() {
    yield takeLatest(CommonType.REQ, fetchNews1)
    yield takeLatest(CommonType.REQ, fetchNews)
};