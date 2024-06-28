import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

import { Provider } from "react-redux";
import store from "./store";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/signin",
    element: <Cart />,
  },
  {
    path: "/signup",
    element: <Cart />,
  },
  { path: "/product/:productId", element: <ProductDetails /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
