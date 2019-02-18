import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Auth from './services/auth.service'
import Login from './pages/Autheticate/login.page';
import Register from './pages/Autheticate/register.page';
import DefaultLayout from './container/default-layout.cointainer';

const autentication = new Auth()

class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        autentication.isAuthenticated() ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
      )} />
    )

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Cadastro Atuarial Dashboard" component={Login} />
          <Route exact path="/register" name="Cadastro Atuarial Dashboard" component={Register} />
          <PrivateRoute path="/" name="Atuarial Dashboard" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
