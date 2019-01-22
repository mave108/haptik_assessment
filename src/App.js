import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect,history } from 'react-router-dom';
import Products from './Containers/Products/products';
import Mylikes from './Containers/Likes/Likes';
import Comments from './Containers/Comments/Comments';



class App extends Component {

  
  render() {
    return (
      <BrowserRouter  basename={process.env.PUBLIC_URL}>      
      <Switch>                      
      <Route path="/post/:pid/comments">
          {( context ) => (
              <Comments pid={ context.match.params.pid }/>
          )}
      </Route>      
      <Route path="/my-likes" component={Mylikes} />
      <Route path="/" exact component={Products} />        
      </Switch>      
    </BrowserRouter>    
    );
  }
}

export default App;