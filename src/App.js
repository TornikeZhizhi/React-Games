import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Slot from "./pages/Slot/Slot";
import Home from "./pages/Home/Home";
import Header from "./Layout/Header";
import Wheel from "./pages/Wheel/Wheel";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/slot", element: <Slot /> },
  { path: "/wheel", element: <Wheel /> },
]);

function App() {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
