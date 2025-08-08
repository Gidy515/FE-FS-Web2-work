import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { headers } from "next/headers";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

console.log(pizzaData);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = {
  //color: "goldenrod",
  //fontSize: "48px",
  //fontFamily: "sansSerif",
  //textTransform: "uppercase",
  //};
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData; // here we are using the pizzaData array defined above with the goal of passing it to the Pizza component to render each pizza in the array

  const numPizzas = pizzas.length; // this variable will be used to check if there are pizzas in the array, if not we will display a message saying that we are closed for the day
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/*<Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={10}
      />*/}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas // the array we want to map
              .map(
                (
                  pizza // for each pizza in the array each element will be passed to the Pizza component
                ) => (
                  <Pizza // Pizza component will receive the pizza object as a prop
                    pizzaObject={pizza} // pizzaObject is the pizza object from the array which contains all the properties of the pizza, and what it does in this case
                    key={pizza.name}
                  /> // pizzaObject is the pizza object from the array which contains all the properties of the pizza
                )
              )}
          </ul>
        </>
      ) : (
        <p>We don close for the day, coming soon</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours(); // Get the current hour in 24-hour format
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //else alert("We're currently closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to recieve your purchases between {openHour}:00 and
          {"" + closeHour}:00. 🍕
          <br />
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Were'e open from {openHour}:00 until {closeHour}:00. come visit us, or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ pizzaObject }) {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "Sold Out yh" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
