import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";
import Search from "./components/Search.jsx";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");
  const [cat, setCat] = useState("");
  const [qdate, setqDate] = useState("");
  const [opt, setOpt] = useState([{ label: "All", value: "All" }]);

  const [val,setVal] = useState("")
  const [search, setSearch] = useState("");
 
    const handleSel = (e) => {
        //console.log(e.target.value)
        setVal(e.target.value)
 } 
  const add = () => {
    const ID = uuid();
    setTodos([
      ...todos,
      { id: ID, text: todo, status: false, date: date, category: cat },
    ]);

    setOpt([...opt, { label: cat, value: cat }]);

    // opt.map((e) => console.log(e));
  };

  return (
    <>
      <h1>To-do</h1>
      <input
        value={todo}
        type="text"
        placeholder="Add Task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => {
          setCat(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>
      <br />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <input
        type="date"
        onChange={(e) => {
          setqDate(e.target.value);
        }}
      />
      <select onChange={handleSel}>
        <option value="">Category</option>
        {opt.map((t, i) => {
          //console.log(t)
          return (
            <option key={i} value={t.label}>
              {t.value}
            </option>
          );
        })}
      </select>
      <div>
        <span>{todo}</span>
      </div>

      <Search
        selVal = {val}
        info={todos}
        query={search}
        dateQuery={qdate}
        set={setTodos}
        options={opt}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
