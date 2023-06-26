import React, { Component } from 'react'
import Films from './Films';
import {LOFilms} from '../shared/ListOfFilms'
export default class Main extends Component {
  constructor(){
    super();
    this.state={
        films: LOFilms
    };
  }
    render() {
    return    <Films films={this.state.films}/>
    
  }
}
