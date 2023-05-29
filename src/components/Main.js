import React, { Component } from 'react'
import { data } from '../shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation'
import Films from './Films';
import {LOFilms} from '../shared/ListOfFilms'
export default class Main extends Component {
  constructor(){
    super();
    this.state={
        players: data,
        films: LOFilms
    };
  }
    render() {
    return  <PlayersPresentation players={this.state.players}/>,
    <Films films={this.state.films}/>
    
  }
}
