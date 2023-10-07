import "./products.css";
import ProductCard from "../ProductCard/productCard";

const Products = (props) => {
  return (
    <div className="home-container">
      <div className="products-container">
        {props.products.map((product, index) => (
          <ProductCard
            product={product}
            cartItems={props.cartItems}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
