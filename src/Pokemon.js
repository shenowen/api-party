import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PokemonFetch from './PokemonFetch';

class Pokemon extends Component {
    state = {
      name: '',
    }
  
    handleChange = (ev) => {
      this.setState({ name: ev.target.value })
    }
  
    handleSubmit = (ev) => {
      ev.preventDefault()
      this.props.history.push(`/Pokemon/${this.state.name}`)
    }
  
    render() {
      return (
        <div className="Pokemon">
          <img
            src="http://i0.kym-cdn.com/photos/images/newsfeed/001/024/523/1c7.jpg"
            alt="Pokemon"
            className="logo"
          />
  
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">
                Look up Pokemon
              </button>
            </div>
          </form>
        
          <Route path="/Pokemon/:name" component={PokemonFetch} />
          
        </div>
      )
    }
  }
  
  export default Pokemon