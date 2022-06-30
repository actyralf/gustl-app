import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

console.log("App.js loaded");
const constUsers = ["Ralf", "John", "Jane"];

function App() {
  const [users, setUsers] = useState(constUsers);
  console.log("App rendered");
  const logUsers = (a, b) => {
    console.log(users);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          setUsers([...users, "Gustl"]);
        }}
      >
        DoSomething
      </button>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
