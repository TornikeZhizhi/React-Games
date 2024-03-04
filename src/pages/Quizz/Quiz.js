import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/quiz.css";
import Book from "./img/book.jpg";
import Music from "./img/music.jpg";
import Movie from "./img/movie.jpg";
import Games from "./img/games.jpg";
import Mithology from "./img/mithology.jpg";
import Art from "./img/art.jpg";
import Comics from "./img/comics.jpg";
import Animals from "./img/animals.jpg";
import Anime from "./img/anime.jpg";

const quizeCategoryData = [
  { name: "Book", img: Book, categoryId: 10 },
  { name: "Music", img: Music, categoryId: 12 },
  { name: "Movie", img: Movie, categoryId: 11 },
  { name: "Games", img: Games, categoryId: 15 },
  { name: "Mithology", img: Mithology, categoryId: 20 },
  { name: "Art", img: Art, categoryId: 25 },
  { name: "Comics", img: Comics, categoryId: 29 },
  { name: "Animals", img: Animals, categoryId: 27 },
  { name: "Anime", img: Anime, categoryId: 31 },
];

function Quiz() {
  const navigate = useNavigate();
  const quizHandler = (catId) => {
    navigate(`${catId}`);
  };

  return (
    <div className="quiz_fluid">
      <div className="quiz_main_container">
        <h2 className="quiz_title">What Type of Quiz Do You Want do?</h2>
        <div className="quiz_container">
          {quizeCategoryData.map((item, index) => {
            return (
              <div
                key={index}
                className="quiz_box"
                onClick={() => quizHandler(item.categoryId)}
              >
                <div className="quiz_text">
                  <h3>{item.name}</h3>
                </div>
                <div
                  className="quiz_img"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
