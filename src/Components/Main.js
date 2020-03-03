import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../App.css'

class Main extends Component {
  constructor(){
    super()
    this.state= {
      topCrimes:[],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('http://nflarrest.com/api/v1/crime')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        topCrimes: result
      });
    });



  }
  render() {
    const {  isLoaded, topCrimes, crime } = this.state;
     if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      return (

        <ul className="list">
          {topCrimes.map(crime => (
          <li key={0}>
            Number_of_Arrests: {crime.arrest_count},
            Type_of_Crime: {crime.Category}
            <br />
          </li>

          ))}
        </ul>
      );
    }
  }
}
export default Main;
