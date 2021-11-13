import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
        </Route>
          <Route path="/register">
            <Register></Register>
        </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
        </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
