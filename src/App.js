import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Slot from "./pages/Slot";

const router = createBrowserRouter([{ path: "/slot", element: <Slot /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
