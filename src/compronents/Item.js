import "./Transaction.css";
import "./Item.css";
import PropTypes from "prop-types";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";

  return (
    <li className={status}>
      {title}{" "}
      <span>
        {symbol}
        {Math.abs(amount)}
      </span>
    </li>
  );
};

Item.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
