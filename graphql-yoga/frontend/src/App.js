import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/new-message" component={MessageForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
