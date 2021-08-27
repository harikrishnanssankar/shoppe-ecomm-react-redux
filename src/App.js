import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";

function App() {
  //fonts used
  //font-family: 'Raleway', sans-serif;
  // font-family: 'Roboto Slab', serif;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
