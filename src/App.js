import React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import store from './app/store';
import { listen } from './app/listener';

import './styles/tailwind.css';

import Header from './components/Header';

import Register from './pages/Register';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import Login from './pages/Login';
import Mypokemon from './pages/Mypokemon';
import Logout from './pages/Logout';



function App() {
  React.useEffect(() => {
    listen();
  }, [])
  return (
    <Provider store={store}>
      <div className="min-h-screen container min-w-full bg-gray-700">
        <Header />
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout}/>
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/mypokemon" component={Mypokemon} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
