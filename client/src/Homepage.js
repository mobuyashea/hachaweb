import React from 'react';
import Map from "./Map";
import Items from './Items';

const Homepage = () => {
  return (
    <section>
        <div className="bannerBlock">
            <div className="opacityBlock">            
            </div>
            <Map/>
            <Items />            
        </div>
       
    </section>
  )
}

export default Homepage