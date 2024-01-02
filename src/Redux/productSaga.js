import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant'

function* getProducts() {
    yield console.log("get product is called")
    let data = yield fetch("http://localhost:3500/products");
    data = yield data.json()
    console.log("action is called", data);
    yield put({ type: SET_PRODUCT_LIST, data }) //pass data to reducer with name set_product_list
}

function* searchProducts(data) {
    yield console.log("search product is called")
    let response = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    const result = yield response.json();
    console.log("action is called", result);
    yield put({ type: SET_PRODUCT_LIST, data: result }) //pass data to reducer with name set_product_list
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga

