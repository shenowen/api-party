import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> API Party </h1>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/homework">Homework</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" render= {() => <h1>GitHub!</h1>} />
          <Route path="/homework" component={Homework} />
          <Route
            render={
              () => (
                <p>To get started, click one of the links above</p>
              )
            }
          />
            
        </Switch>

      </div>
    )
  }
}

export default App
