import {HiCreditCard} from "react-icons/hi";
import creditCard from "../../assets/creditCard.png";
import "./cart.css";
import SummaryValue from "./SummaryValue";
type Props = {
  price: number;
  discountedPrice: number;
  qty: number;
};

const CartSummary = (props: Props) => {
  return (
    <div className="cart-wrapper">
      <div className="shopping-cart">
        <div className="title">Summary</div>
        <div className="checkout-wrapper">
          <img src={creditCard} style={{height: "225px"}} />
          <div className="checkout">
            <SummaryValue label="Price" value={props.price} />
            <SummaryValue
              label="Discount"
              value={props.price - props.discountedPrice}
            />
            <SummaryValue label="Quantity" value={props.qty} />
            <SummaryValue label="Total Price" value={props.discountedPrice} />
            <div
              className="flex-row"
              style={{
                borderBottom: "1px solid #e1e8ee",
                paddingBottom: "15px",
              }}
            ></div>
            <button
              className="fetch-products"
              style={{marginRight: "25%"}}
              type="button"
              name="button"
            >
              Checkout <HiCreditCard size="1.5em" style={{marginLeft: "5px"}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
