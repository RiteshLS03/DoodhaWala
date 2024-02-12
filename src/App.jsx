import { createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import About from "./components/About/About";
import userContext from "./utils/userContext";

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <userContext.Provider
      value={{ cartItem: cartItem, setCartItem: setCartItem }}
    >
      <Header />
      <Outlet />
      <Footer />
    </userContext.Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <About />,
      },
    ],
  },
]);

export default App;
