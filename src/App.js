import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>


          <Route path="/">
          <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}
