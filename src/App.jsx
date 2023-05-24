import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Items from "./Items";
import Lists from "./Lists";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/")
      .then((res) => setData(res.data.products));
  }, [data]);

  // return <Items data={data}></Items>;
  return <Lists />;
}

export default App;
