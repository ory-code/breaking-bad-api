import React from "react";
import CharactersItems from "./CharactersItems";
import Loading from "./Loading";


const Characters = ({ items, loading }) => {
  return loading ? (
    <Loading/>
  ) : (
    <section className="figures">
      {items.map((item) => (
        <CharactersItems key={item.char_id} item={item}></CharactersItems>
      ))}
    </section>
  );
};

export default Characters;
