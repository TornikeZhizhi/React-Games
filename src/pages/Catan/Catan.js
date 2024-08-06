import React, { useEffect } from "react";
import "./css/Catan.css";
import tree from "./img/tree.png";
import brick from "./img/brick.png";
import desert from "./img/desert.png";
import hay from "./img/hay.png";
import sheep from "./img/sheep.png";
import rock from "./img/rock.png";

function Catan() {
  let catanArray = [
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
  ];
  useEffect(() => {}, []);

  return (
    <div className="ct_fluid">
      <div className="ct_container">
        <div class="cat_coastline cat_coastline_1p cat_coastline_n1"></div>
        <div class="cat_coastline cat_coastline_2p cat_coastline_n2"></div>
        <div class="cat_coastline cat_coastline_1p cat_coastline_n3"></div>
        <div class="cat_coastline cat_coastline_2p cat_coastline_n4"></div>
        <div class="cat_coastline cat_coastline_1p cat_coastline_n5"></div>
        <div class="cat_coastline cat_coastline_2p cat_coastline_n6"></div>
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
