import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import Characters from "./component/Characters";
import Search from "./component/Search";



const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      
      setItems(result.data)
      setLoading(false)
    };
    fetchItems();
  },[query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)}/>
      <Characters loading={loading} items={items}/>
     
    </div>
  );
};

export default App;
