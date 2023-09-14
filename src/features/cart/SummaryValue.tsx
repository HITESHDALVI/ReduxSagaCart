import "./cart.css";
type Props = {
  label: string;
  value: number;
};
const SummaryValue = (props: Props) => {
  return (
    <div className="flex-row">
      <h4 className="total-label">{props.label} : </h4>
      <div className="sum-price"> $ {props.value}</div>
    </div>
  );
};

export default SummaryValue;
