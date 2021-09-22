import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import List from "./components/List/List";
import "./App.css";
function App() {
  const right = (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
  );
  return (
    <div className="App">
      <div className="app-left">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Beatiful beach"
          className="left-img"
        ></img>
      </div>
      <div className="app-right"> {right} </div>
    </div>
  );
}

export default App;
