import './App.css';
import Banner from './Component/Banner';
import Checkout from './Component/Checkout';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useEffect} from 'react';
import { useStateValue } from './Component/StateProvider';
import { auth } from './firebase';
import Login from './Component/Login';
import Payment from './Component/Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Component/Orders';
const promise = loadStripe(
  "pk_test_51N0WGPGmRj1Z1DFGwoI1AGh5uHyIXfUFPDlJJ64WgoogAYxVWs57IgSGzt0re43MqfBEbDOXHOvETblJJKDeGV8M00RlsImBps"
);
function App() {
  const [{}, dispatch] =useStateValue()
    useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                {" "}
                <Header />
                <Banner />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Banner />
                <Orders />
              </>
            }
          />

          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header /> <Banner />
                <Home />{" "}
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
