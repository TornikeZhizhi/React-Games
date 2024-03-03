import React from "react";
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
function Quiz() {
  return (
    <div className="quiz_fluid">
      <div className="quiz_main_container">
        <h2 className="quiz_title">What Type of Quiz Do You Want do?</h2>
        <div className="quiz_container">
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Book</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Book})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Music</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Music})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Movie</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Movie})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Video-Games</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Games})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Mythology</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Mithology})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Art</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Art})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Comics</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Comics})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Animals</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Animals})` }}
            ></div>
          </div>
          <div className="quiz_box">
            <div className="quiz_text">
              <h3>Anime</h3>
            </div>
            <div
              className="quiz_img"
              style={{ backgroundImage: `url(${Anime})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
