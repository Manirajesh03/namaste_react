import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import RestarantMenu from "./components/RestaurantMenu/RestarantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants/:resId" element={<RestarantMenu />} />
        <Route
          path="/grocery"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
