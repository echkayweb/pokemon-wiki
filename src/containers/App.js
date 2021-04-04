import React, { Component } from "react";
import Button from "../components/Button";
import PokemonDetails from "../components/PokemonDetails";
import PokemonImage from "../components/PokemonImage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      id: 1,
      abilities: [],
    };
  }
  fetchData = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pokemon: data });
        const abilitiesArray = this.state.pokemon.abilities.map(
          (e) => e.ability.name
        );
        this.setState({ abilities: abilitiesArray });
      });
  };
  onNextClicked = () => {
    let id = this.state.id;
    if (id > 897) {
      id = 1;
      this.setState({ id: id });
    } else {
      id += 1;
      this.setState({ id: id });
    }
    this.fetchData(id);
  };
  onPrevClicked = () => {
    let id = this.state.id;
    if (id < 2) {
      id = 898;
      this.setState({ id: id });
    } else {
      id -= 1;
      this.setState({ id: id });
    }
    this.fetchData(id);
  };
  componentDidMount() {
    this.fetchData(this.state.id);
  }
  render() {
    const { pokemon, id, abilities } = this.state;
    return (
      <div className="container">
        <h1 className="header">Pokemon Wiki</h1>
        <div>
          <Button
            buttonText={"Previous"}
            clicked={this.onPrevClicked}
            icon={"fa fa-chevron-left fa-2x"}
            customClass={"left"}
          />
        </div>
        <div className="card">
          <PokemonImage altText={pokemon.name} id={id} />
          <PokemonDetails
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={abilities}
          />
        </div>
        <div>
          <Button
            buttonText={"Next"}
            clicked={this.onNextClicked}
            icon={"fa fa-chevron-right fa-2x"}
            customClass={"right"}
          />
        </div>
      </div>
    );
  }
}

export default App;
