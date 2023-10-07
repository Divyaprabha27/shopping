import "./productCard.css";

const ProductCard = (props) => {
  const { product, cartItems, addToCart, removeFromCart } = props;

  const addingItemToCart = (item) => {
    console.log("Adding Product: ", item);
    addToCart({ ...item, quantity: 1 });
  };

  const removingItemFromCart = (item) => {
    removeFromCart(item);
  };
  return (
    <div className="product-container">
       {product.imgUrl && (
        <div>
          <img
            className="product-image"
            src={product.imgUrl}
            alt={product.name}
          />
        </div>
      )}
      <h3>{product.name} </h3>
      {product.description && (
        <div className="description">{product.description}</div>
      )}
      <p>{product.price} </p>
      <div className="button-container">
        {cartItems.some((item) => item.id === product.id) ? (
          <div
            className="remove-from-cart"
            onClick={() => removingItemFromCart(product)}
          >
            Remove from cart
          </div>
        ) : (
          <div
            className="add-to-cart"
            onClick={() => addingItemToCart(product)}
          >
            Add to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

// var result = 5 > 10 ? "5 is greater" : "10 is greater";
