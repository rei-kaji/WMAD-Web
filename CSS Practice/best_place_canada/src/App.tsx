import React from "react";
import "./App.css";
import Article from "./Article";

function App() {
  return (
    <>
      <h1>Best Places to Visit in Canada</h1>
      <div className="border"></div>
      <p>
        Canada's cities and towns offer travelers a diverse choice of
        experiences, from chic, cosmopolitan centers to mountain resorts and
        maritime cities. Determining the best places to visit may depend on your
        interests and the type of trip you're hoping to create. In the heart of
        the country is Toronto, Canada's biggest city and the highlight of
        Canada's arts and cultural scene. Nearby, Niagara Falls is a must-see
        attraction for visitors to Canada that never disappoints. In the
        neighboring French-speaking province of Québec, Montreal is known for
        fashion, culture, and history. In the West, Vancouver and Victoria offer
        two very different perspectives on West Coast cities, but each has
        something unique to offer. The mountain towns of Whistler and Banff are
        places to immerse yourself in beautiful mountain scenery and enjoy a
        little of the great outdoors.
      </p>
      {Article.map((data) => {
        return (
          <div key={data.title}>
            <h2>{data.title}</h2>
            <div className="imagecontainer">
              <img src={data.image} alt={data.image} />
            </div>

            <p>{data.article}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
