import "./header.css";

import CartIcon from "../../assets/icons/cart-icon.png";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="logo">
        <h2>Shopping</h2>
      </div>
      <div className="menu-center">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="cart">
        <div className="cart-icon">
          <img src={CartIcon} alt="Cart" width={18} height={18} />
          <span className="cart-count">Cart {props.cartCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;