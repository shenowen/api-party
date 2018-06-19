import React, { Component } from 'react'
import PokemonSprite from 'pokemon-images'

class PokemonFetch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      namu: ''
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.name}/`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state
    const name = user.name
    const weight = user.weight
    const height = user.height
    const spriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + user.id +  ".png"
    console.log(user)

    return (
      <div className="PokemonFetch">      
      <img src={spriteURL} alt="" />
        <h2>
            Name: {name} Weight: {weight} 
        </h2>
        <h3> Height: {height}</h3>
      </div>
    )
  }
}



export default PokemonFetch