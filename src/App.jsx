import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layour";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NoPage from "./NoPage";

import axios from "axios";

const App = () => {
  const [mydata, setMydata] = useState([]);
  const loaddata = () => {
    let url = "https://jsonplaceholder.typicode.com/todos/";
    axios.get(url).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loaddata();
  }, []);
  let status = "";
  const ans = mydata.map((key) => {
    if (key.completed == true) {
      status = "True";
    } else {
      status = "False";
    }

    return (
      <>
        <tr>
          <td>{key.userId}</td>
          <td>{key.id}</td>
          <td>{key.title}</td>
          <td>{status}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1>welcome react</h1>
      <table>
        <tr style={{ border: "2px solid black" }}>
          <th>user</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </table>
      {ans}
    </>
  );
};
export default App;
