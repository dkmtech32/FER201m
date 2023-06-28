import React, { Component } from 'react'
import Films from './Films';
import {LOFilms} from '../shared/ListOfFilms'
export default class Main extends Component {
  constructor(){
    super();
    this.state={
        films: [],
    };
  }
  componentDidMount() {
    this.fetchFilms();
}

fetchFilms = async () => {
    try {
        const response = await fetch('https://64901b431e6aa71680ca9595.mockapi.io/film');
        if (response.ok) {
            const films = await response.json();
            this.setState({ films });
        } else {
            throw new Error('Failed to fetch films');
        }
    } catch (error) {
        console.error(error);
    }
};


    render() {
    return    <Films films={this.state.films}/>
    
  }
}




