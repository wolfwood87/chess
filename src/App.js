import logo from './logo.svg';
import './App.css';
import Header from "./ui/Header.js"
import GridDisplay from "./grid/GridDisplay.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={GridDisplay} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
