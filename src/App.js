import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Slot from "./pages/Slot/Slot";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/slot", element: <Slot /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
