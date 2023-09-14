import "./product.css";
import {addAsyncCart} from "../cart/cartSlice";
import {useAppDispatch} from "../../app/hooks";
import {FaShoppingCart, FaHeart} from "react-icons/fa";
import StarIcons from "../../common/components/StarIcons";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";

const ProductCard = (item) => {
  const dispatch = useAppDispatch();
  const sizeArray = ["XS", "S", "M", "L", "XL"];
  const colorArray = [
    "Collegiate Gold",
    "Team Navy",
    "Pulse Blue",
    "Pink Fusion",
  ];
  const starArray = ["Star", "Star", "Star", "StarHalfAlt", "RegStar"];
  return (
    <>
      <div className="image-container">
        <img src={item.thumbnail} alt={item.title} />
        <div className="price">${item.discountPercentage}</div>
      </div>
      <label className="favorite">
        <input type="checkbox" checked readOnly />
        <FaHeart />
      </label>
      <div className="content">
        <div className="brand">{item.title}</div>
        <div className="product-name">{item.description}</div>
        <div className="color-size-container">
          <div className="colors">
            Color
            <ul className="colors-container">
              {colorArray.map((color, index) => (
                <ProductColor key={index} label={color} />
              ))}
              +2
            </ul>
          </div>
          <div className="sizes">
            Size
            <ul className="size-container">
              {sizeArray.map((size, index) => (
                <ProductSize
                  key={index}
                  label={size}
                  value={size.toLowerCase()}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="rating">
          {starArray.map((name, index) => (
            <StarIcons key={index} Name={name} />
          ))}
        </div>
      </div>
      <div className="button-container">
        <button className="buy-button button">Buy Now</button>
        <button
          className="cart-button button"
          onClick={() => dispatch(addAsyncCart(item.item))}
        >
          <FaShoppingCart size={"1em"} />
        </button>
      </div>
    </>
  );
};

export default ProductCard;
