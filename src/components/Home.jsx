import React from 'react';
import Header from './Header'
import Home2 from './Home2';

function Home(){
  var home = {
    backgroundImage: "url(https://www.tesla.com/ns_videos/homepage/main_hero_homepage_landscape.jpg)",
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div>
      <div style={home}>
        <Header/>
      </div>
      <div>
        <Home2/>
      </div>
    </div>
  )
}

export default Home;
