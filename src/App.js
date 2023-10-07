import "./App.css";
import Home from "./Components/Home/home";
import Products from "./Components/products/products";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { useState } from "react";
import img1 from "./assets/img1.jpg"
var myName = "John";

const products_list = [
  {
    id: 1,
    imgUrl: "https://2.bp.blogspot.com/--5Gv-w_HdfQ/Va4H8qBOLSI/AAAAAAAAAH0/jB3KLlpKIZc/s640/PicMonkey%2BCollage.jpg",
    name: "Fancy Product",
    price: "$40.00 - $80.00",
  },
  {
    id: 2,
    name: "Special Item",
    price: "$18.00",
    imgUrl:
      img1,
  },
  {
    id: 3,
    name: "Sale Item",
    price: "$25.00",
    imgUrl:
      "https://i.pinimg.com/originals/2e/0c/a4/2e0ca4b37eed36f328486da826da3bb7.jpg",
  },
  {
    id: 4,
    name: "Popular Item",
    price: "$18.00",
    imgUrl:
      "http://1.bp.blogspot.com/_gqFahzpxIBQ/TGeNVwAMRAI/AAAAAAAABr8/oQr6zr42Hlw/s1600/IMG_6013.JPG",
  },
  {
    id: 5,
    name: "Sale Item",
    price: "$25.00",
    imgUrl:
      "https://i.pinimg.com/originals/2e/0c/a4/2e0ca4b37eed36f328486da826da3bb7.jpg",
  },
  {
    id: 6,
    imgUrl: "https://2.bp.blogspot.com/--5Gv-w_HdfQ/Va4H8qBOLSI/AAAAAAAAAH0/jB3KLlpKIZc/s640/PicMonkey%2BCollage.jpg",
    name: "Fancy Product",
    price: "$40.00 - $80.00",
  },
  {
    id: 7,
    name: "Special Item",
    price: "$18.00",
    imgUrl:
      "http://theoneshop.in/wp-content/uploads/2016/07/148003A.jpg",
  },
  {
    id: 8,
    name: "Popular Item",
    price: "$18.00",
    imgUrl:
      "http://1.bp.blogspot.com/_gqFahzpxIBQ/TGeNVwAMRAI/AAAAAAAABr8/oQr6zr42Hlw/s1600/IMG_6013.JPG",
  },
];

function App() {
  const [products, setProducts] = useState(products_list);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((cartItems) => [...cartItems, newItem]);
  };

  const removeFromCart = (itemToBeRemoved) => {
    setCartItems((cartItems) =>
      cartItems.filter((item) => item.id !== itemToBeRemoved.id)
    );
  };

  return (
    <div className="App">
      <Header cartCount={cartItems.length} />
      <Home />
      <Products
        products={products}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        name={myName}
        city={"Chennai"}
      />
      <Footer />
    </div>
  );
}

export default App;
