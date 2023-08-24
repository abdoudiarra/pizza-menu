import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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


function App(){
  return (
    <div className='container'>
      <h1>Hello React</h1>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  )
}


function Header(){
  return (
    <div className='header'>
      <h1>Fast React Pizza Co.</h1>
    </div>
  )
}

function Pizza({pizzaObj}){
  //console.log(props);

  // if(pizzaObj.soldOut) return null;
  
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out':''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      {/* {pizzaObj.soldOut ? (
        <span>SOLD OUT</span>
      ):(
        <span>{pizzaObj.price}</span>
      )
    } */}
      <span>{pizzaObj.soldOut ? "Sold Out " : pizzaObj.price}</span>
    </li>
  )
}

function Menu(){

  //number of pizzas 
  const numPizzas = pizzaData.length;

  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      {
      numPizzas > 0 ?
      <React.Fragment> 
        <p>
          Authentic Italian cuisine, 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
        </p>
        
        <ul className='pizzas'>
          {pizzaData.map(pizza => (<Pizza pizzaObj={pizza}></Pizza>))}
        </ul> 
      </React.Fragment>
        : <p>We're still working on our menu. Please come back later </p>
      }

      
    </div>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return(
    
    <footer className='footer'>
      
        <div className='order'>
        {new Date().toLocaleTimeString()}{isOpen ? <p>We're currently open until {closeHour}:00. Come visit us or order online</p> :
         <p>We are currently closed</p>}
        <button className='btn'>Order</button>
        </div>
    </footer>
    
  )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <App/>
</React.StrictMode>
);