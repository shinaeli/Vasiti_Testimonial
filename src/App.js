import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Form from './components/Form'
import Greet from './components/Greet'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/form">
            <Form />
        </Route>
        <Route path="/greet">
            <Greet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
