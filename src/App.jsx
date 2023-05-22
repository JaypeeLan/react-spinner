import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Items from "./Items";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/")
      .then((res) => setData(res.data.products));

    console.log(data);
  }, [data]);

  return <Items data={data}></Items>;
}

export default App;
