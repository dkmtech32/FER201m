import React, { Component } from 'react'
import { LOPlayers } from '../shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation'
export default class Main extends Component {
  constructor(){
    super();
    this.state={
        players: LOPlayers
    };
  }
    render() {
    return  <PlayersPresentation players={this.state.players}/>
  }
}
