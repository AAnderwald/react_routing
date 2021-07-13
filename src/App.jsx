import "./App.css";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Films from "./views/Films";
import People from "./views/People";
import Specie from "./views/Specie";
import Home from "./views/Home";


const App = () => {
  return (
    <BrowserRouter>
      
        <Navbar />

        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route exact path = "/Films">
            <Films />
          </Route>
          <Route exact path = "/People">
            <People />
          </Route>
          <Route exact path = "/Specie">
            <Specie />
          </Route>
        </Switch>
   
    </BrowserRouter>
 
  );

}


export default App;