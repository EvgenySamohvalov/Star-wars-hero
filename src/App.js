import React, { Component } from 'react';
import './App.scss';
import ItemHero from './components/ListHeroes/ItemHero/ItemHero';
import ListHeroes from './components/ListHeroes/ListHeroes';



class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  changeHero = (hero) => { 
    this.setState({ hero: hero })
  }

  render() {
    return (
      <div className="App">
        <ListHeroes changeHero={this.changeHero}/>
        {
          this.state.hero
          ? <ItemHero hero={this.state.hero}/>
          : null
        }
        
      </div>
    )
  }
}

export default App;
