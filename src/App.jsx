import Home from "../src/pages/Home";
import Pokemon from "../src/pages/Pokemon";
import Custom from "../src/pages/Custom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:pokeId", element: <Pokemon /> },
  { path: "/wenlei", element: <Custom /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
