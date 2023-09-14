import React from "react";
import "./product.css";

type Props = {
  label: string;
  value: string;
};

const ProductSize = (props: Props) => {
  return (
    <li className="size">
      <label className="size-radio">
        <input type="radio" value={props.value} name="size" readOnly />
        <span className="name">{props.label}</span>
      </label>
    </li>
  );
};

export default ProductSize;
