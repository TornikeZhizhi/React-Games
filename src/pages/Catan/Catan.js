import React, { useEffect, useState } from "react";
import "./css/Catan.css";
import tree from "./img/tree.png";
import brick from "./img/brick.png";
import desert from "./img/desert.png";
import hay from "./img/hay.png";
import sheep from "./img/sheep.png";
import rock from "./img/rock.png";

function Catan() {
  const [catanArray, setCatanArray] = useState([
    { name: rock },
    { name: hay },
    { name: tree },
    { name: rock },
    { name: hay },
    { name: sheep },
    { name: rock },
    { name: tree },
    { name: tree },
    { name: desert },
    { name: hay },
    { name: sheep },
    { name: tree },
    { name: hay },
    { name: sheep },
    { name: brick },
    { name: brick },
    { name: sheep },
    { name: brick },
  ]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const shuffledArray = [...catanArray];
    shuffleArray(shuffledArray);
    setCatanArray(shuffledArray);
  }, []);

  return (
    <div className="ct_fluid">
      <div className="ct_container">
        <div className="coasts_box">
          <div class="cat_coastline cat_coastline_1p cat_coastline_n1"></div>
          <div class="cat_coastline cat_coastline_2p cat_coastline_n2"></div>
          <div class="cat_coastline cat_coastline_1p cat_coastline_n3"></div>
          <div class="cat_coastline cat_coastline_2p cat_coastline_n4"></div>
          <div class="cat_coastline cat_coastline_1p cat_coastline_n5"></div>
          <div class="cat_coastline cat_coastline_2p cat_coastline_n6"></div>
        </div>
        <div class="ship_container">
          <div className="ct_ship ship_tree"></div>
          <div className="ct_ship ship_rock"></div>
          <div className="ct_ship ship_sheep"></div>
          <div className="ct_ship ship_tree"></div>
          <div className="ct_ship ship_three ship_three1"></div>
          <div className="ct_ship ship_three ship_three2"></div>
          <div className="ct_ship ship_three ship_three3"></div>
          <div className="ct_ship ship_brick"></div>
          <div className="ct_ship ship_hay"></div>
        </div>
        <div className="ct_inner_container">
          {catanArray.map((item, index) => {
            return (
              <div className="ct_block">
                <img src={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Catan;
