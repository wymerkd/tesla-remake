import React from 'react';

function Home2(){
  var powerEverything = {
    backgroundImage: "url(https://www.tesla.com/ns_videos/homepage/homepage_energy_hero_desktop.jpg)",
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return(
    <div style={powerEverything}> </div>
  );
}

export default Home2;
