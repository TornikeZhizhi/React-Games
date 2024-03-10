import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Slot from "./pages/Slot/Slot";
import Home from "./pages/Home/Home";
import Header from "./Layout/Header";
import Wheel from "./pages/Wheel/Wheel";
import FlipGame from "./pages/FlipGame/FlipGame";
import Quiz from "./pages/Quizz/Quiz";
import QuinInner from "./pages/Quizz/QuizInner";
import Yahtze from "./pages/Yahtze/Yahtze";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/slot", element: <Slot /> },
      { path: "/wheel", element: <Wheel /> },
      { path: "/flip-game", element: <FlipGame /> },
      { path: "/yahtze", element: <Yahtze /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/quiz/:id", element: <QuinInner /> },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
