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
import NewWheel from "./pages/newWheel/newWheel";
import HangManMain from "./pages/HangMan/HangManMain";
import TypeGame from "./pages/TypeGame/TypeGame";
import Breakout from "./pages/Breakout/breakout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Slot /> },
      { path: "/slot", element: <Slot /> },
      { path: "/wheel", element: <Wheel /> },
      { path: "/flip-game", element: <FlipGame /> },
      { path: "/newWheel", element: <NewWheel /> },
      { path: "/yahtze", element: <Yahtze /> },
      { path: "/hangman", element: <HangManMain /> },
      { path: "/typegame", element: <TypeGame /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/breakout", element: <Breakout /> },
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
