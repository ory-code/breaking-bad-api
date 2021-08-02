import React from "react";

const CharactersItems = ({ item }) => {
  console.log(item);
  return (
    <div className="figure">
      <div className="figure-inner">
        <div className="figure-front">
          <img src={item.img} alt="" />
        </div>
        <div className="figure-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong>
              {item.portrayed}
            </li>
            <li>
              <strong>Birthday:</strong>
               {item.birthday}
            </li>
            <li>
              <strong>Status:</strong>
              {item.status}
            </li>
            <li>
              <strong>Occupation:</strong>
              {item.occupation}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharactersItems;
