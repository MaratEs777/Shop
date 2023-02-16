import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./utils/notyfy"; // Уведомления
import { products } from "./utils/products"; // object products

function App() {
  const [goodsShop] = useState(products);
  const [basket, setBasket] = useState(products);

  const deleteOrder = (id) => {
    setBasket({ orders: basket.orders.filter((el) => el.id !== id) });
  };

  const addToOrder = (item) => {
    let isInArray = false;
    basket.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
      console.log(isInArray);
    });

    if (!isInArray) {
      setBasket({ orders: [...basket.orders, item] });
      notify();
    }
  };

  return (
    <div className="wrapper">
      <Header orders={basket.orders} onDelete={deleteOrder} />
      <Items product={goodsShop} onAdd={addToOrder} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
