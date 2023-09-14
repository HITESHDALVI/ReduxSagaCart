import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {
  addAsyncCart,
  addAsyncCartFulfilled,
  deleteAsyncItem,
  deleteAsyncItemFulfilled,
  fetchCartAsync,
  fetchCartAsyncFulfilled,
  updateAsyncItem,
  updateAsyncItemFulfilled,
} from "./cartSlice";
import {addToCart, deleteItem, fetchCart, updateItem} from "./cartApi";

function* getCartItems(action) {
  try {
    const response = yield call(fetchCart);
    yield put({
      type: fetchCartAsyncFulfilled.toString(),
      payload: response.data,
    });
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", error: (e && e.message) || ""});
  }
}
function* addCartItems(action) {
  try {
    const {
      id,
      title,
      brand,
      price,
      rating,
      description,
      thumbnail,
      discountPercentage,
    } = action.payload;
    const response = yield call(addToCart, {
      id,
      title,
      brand,
      price,
      rating,
      description,
      thumbnail,
      discountPercentage,
      quantity: 1,
    });
    yield put({
      type: addAsyncCartFulfilled.toString(),
      payload: response.data,
    });
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", error: (e && e.message) || ""});
  }
}
function* updateCartItems(action) {
  try {
    const response = yield call(
      updateItem,
      action.payload.id,
      action.payload.item
    );
    yield put({
      type: updateAsyncItemFulfilled.toString(),
      payload: response.data,
    });
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", error: (e && e.message) || ""});
  }
}
function* deleteCartItems(action) {
  try {
    const response = yield call(deleteItem, action.payload);
    yield put({
      type: deleteAsyncItemFulfilled.toString(),
      payload: response.data,
    });
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", error: (e && e.message) || ""});
  }
}
export function* watchGetitems() {
  yield takeEvery(fetchCartAsync.toString(), getCartItems);
}
export function* watchAddtoCart() {
  yield takeEvery(addAsyncCart.toString(), addCartItems);
}

export function* watchUpdateItem() {
  yield takeEvery(updateAsyncItem.toString(), updateCartItems);
}
export function* watchDeleteItem() {
  yield takeEvery(deleteAsyncItem.toString(), deleteCartItems);
}

export function* mySaga() {
  yield all([
    watchGetitems(),
    watchAddtoCart(),
    watchUpdateItem(),
    watchDeleteItem(),
  ]);
}
