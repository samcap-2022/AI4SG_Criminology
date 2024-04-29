import React from "react";
import Components from "./Components/Components.js";
import * as Env from "./environments";
import Parse from "parse";
import './App.css';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
    <div>
      <Components />
    </div>
  );
}

export default App;
