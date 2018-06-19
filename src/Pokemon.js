import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Pokemon extends Component {
    state = {
      username: '',
    }
  
    handleChange = (ev) => {
      this.setState({ username: ev.target.value })
    }
  
    handleSubmit = (ev) => {
      ev.preventDefault()
      this.props.history.push(`http://pokeapi.co/api/v2/pokemon/${this.state.username}`)
    }
  
    render() {
      return (
        <div className="Github">
          <img
            src="http://i0.kym-cdn.com/photos/images/newsfeed/001/024/523/1c7.jpg"
            alt="Pokemon"
            className="logo"
          />
  
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">
                Look up Pokemon
              </button>
            </div>
          </form>
  
          
        </div>
      )
    }
  }
  
  export default Pokemon