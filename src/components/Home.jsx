import React from 'react';
import Header from './Header'

function Home(){
  var home = {
    backgroundImage: "url(https://www.tesla.com/ns_videos/homepage/main_hero_homepage_landscape.jpg)",
    height: "1400px",
    backgroundSize: "cover"
  }
  return (
    <div style={home}>
      <Header/>
    </div>
  )
}

  export default Home;
