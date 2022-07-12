import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CartProvider } from './context/CartContext'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_nwjSu7cbkavfVQhKR0lOOrJ6iCxUK6M",
  authDomain: "tienda-curso-f9e85.firebaseapp.com",
  projectId: "tienda-curso-f9e85",
  storageBucket: "tienda-curso-f9e85.appspot.com",
  messagingSenderId: "940957794985",
  appId: "1:940957794985:web:8ea447cf63600341e55fb8"
};


initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <App />
    </CartProvider>
    
);


