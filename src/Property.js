import React, {Component} from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Map from './components/map/'
import KeyFeatures from './keyFeatures/'
import Home from './components/Home';
import Navigation from'./Navigation';
import Register from './Register';
import Searchbox from './components/Searchbox';
import Facecard from './components/Facecard';
import Facecardsec from './components/Facecardsec';
import Fcard from './components/Fcard';
import CardList from './CardList';
import Card from './Card';
import About from './About';




class Property extends Component {
  constructor(){
    super()
    this.state ={
      robots: [],
      route: 'home',
      searchfield: 'm'
    }
  }

     componentDidMount(){
      fetch('https://pure-temple-31240.herokuapp.com/property' )
      .then(response => response.json())
      .then(property => this.setState({robots :property}));

     }

      onRouteChange = (route) => {
         this.setState({route: route});
  }




  onSearchChange= (event) => {
    this.setState({searchfield : event.target.value})
  }
    render(){
      
      const filteredRobots = this.state.robots.filter(robots =>{
         
        return robots.details.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
     
            



  const features = [
    'Help to Buy home, ideal for first time buyers',
    'Get your house in one of the most premium location',
    'Appartments,Homes and Office Spaces for Sale and Rent',
    'For more details and related query',
    'Contact :- 8060797403'
  ]


  return (
    <div className="App">
      { this.state.route === 'home'
      ? <div>

      <CardList robots ={filteredRobots}  />
      <Facecard />
      <Facecardsec />
      <Fcard />
      
      
      <KeyFeatures features={features} />
      <Map  robots ={this.state.searchfield}/>
      </div> 
       : ( this.state.route ==='signout'
       ? <div> <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
       <Register onRouteChange={this.onRouteChange}/>
       <Facecard />
      <Facecardsec />
      <Fcard />
      <Map  robots ={this.state.searchfield}/>
      </div>
      : <div> <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      <About /> 
      </div>
     )
   }
    
    </div>
  )
}
}
export default Property;
