import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CulturalPlace from './components/CulturalPlace';
import 'bootstrap/dist/css/bootstrap.min.css';


import culturalPlacesData from "./data/culturalPlaces.json";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <video autoPlay loop muted id="bgVideo">
        <source src="/videos/bg-vid.mp4"  type='video/mp4' />
        Your browser does not support the video tag.
       </video>
        <h1 style={{"color":"#5E2D0E"}}>ISTANBUL HISTORIC PLACES</h1>
       <div className='container'>
        <div className='row'>
          {culturalPlacesData.map((place, index) => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
              <CulturalPlace
                name={place.name}
                date={place.date}
                description={place.description}
                image={place.image}
                url={place.url}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
