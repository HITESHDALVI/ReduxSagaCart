import React from "react";
import "./product.css";

type Props = {
  label: string;
};

const ProductColor = (props: Props) => {
  return (
    <li className="color">
      <a href="#"></a>
      <span className="color-name">{props.label}</span>
    </li>
  );
};

export default ProductColor;
