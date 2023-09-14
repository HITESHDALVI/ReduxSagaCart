import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAsyncItem, updateAsyncItem} from "./cartSlice";
import "./cart.css";
import {FaHeart, FaMinus, FaPlus} from "react-icons/fa";
import {VscClose} from "react-icons/vsc";
import {cartDataType} from "./cart-type";
import CartSummary from "./CartSummary";
import NoItemCart from "./NoItemCart";
const Cart = () => {
  let mode = "increment";
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const changeQuantity = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
    item: cartDataType,
    mode: string = "increment"
  ) => {
    e.preventDefault();
    if (mode === "decrement") {
      dispatch(updateAsyncItem({id, item: {quantity: item.quantity - 1}}));
    } else if (mode === "increment") {
      dispatch(updateAsyncItem({id, item: {quantity: item.quantity + 1}}));
    }
  };

  const price =
    cart &&
    cart
      .map((item: cartDataType) => item.price * item.quantity)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
      .toFixed(2);
  const discountedPrice =
    cart &&
    cart
      .map((item: cartDataType) => item.discountPercentage * item.quantity)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
      .toFixed(2);

  const qty =
    cart &&
    cart
      .map((item: cartDataType) => item.quantity)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
      .toFixed(2);

  return (
    <>
      {cart && cart.length > 0 ? (
        <>
          <div className="cart-wrapper">
            <div className="shopping-cart">
              <div className="title">Shopping Bag</div>
              {cart &&
                cart.length > 0 &&
                cart.map((item: cartDataType) => (
                  <div className="item" key={item.id}>
                    <div className="buttons">
                      <VscClose
                        onClick={() => dispatch(deleteAsyncItem(item.id))}
                        style={{
                          fontWeight: "800",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                        color="black"
                        size={"1.25em"}
                      />
                      <FaHeart
                        color="#ff5f5f"
                        style={{fontWeight: "800", marginRight: "10px"}}
                      />
                    </div>
                    <div className="image">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{height: "80px", width: "125px"}}
                      />
                    </div>
                    <div className="description">
                      <span>{item.title}</span>
                      <span>{item.brand}</span>
                    </div>
                    <div className="quantity">
                      <button
                        className="plus-btn"
                        type="button"
                        name="button"
                        disabled={item.quantity === 1}
                        onClick={(e) =>
                          changeQuantity(e, item.id, item, (mode = "decrement"))
                        }
                      >
                        <FaMinus color="#ff3f3f" style={{fontWeight: "200"}} />
                      </button>
                      <input
                        type="text"
                        name="name"
                        value={item.quantity}
                        disabled
                      />
                      <button
                        className="minus-btn"
                        type="button"
                        name="button"
                        onClick={(e) =>
                          changeQuantity(e, item.id, item, (mode = "increment"))
                        }
                      >
                        <FaPlus color="#0fca0f" style={{fontWeight: "200"}} />
                      </button>
                    </div>
                    <div className="total-price">
                      ${item.discountPercentage}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <CartSummary
            qty={qty}
            price={price}
            discountedPrice={discountedPrice}
          />
        </>
      ) : (
        <NoItemCart />
      )}
    </>
  );
};

export default Cart;
