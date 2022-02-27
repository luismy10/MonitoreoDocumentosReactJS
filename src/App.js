import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import "./assets/js/bootstrap";
import Header from './components/layout/Header';
import Menu from './components/layout/Menu';
import Main from "./assets/js/main";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NotFound from "./components/error/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Main();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route
            path="/"
            name="home"
            exact={true}
            render={(props) => <Home />}
          />
          <Route
            path="/dashboard"
            name="dashboard"
            exact={true}
            render={(props) => <Dashboard />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
