import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import Projetos from './Pages/Projetos';
import Contato from './Pages/Contato';

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projetos">
            <Projetos />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
