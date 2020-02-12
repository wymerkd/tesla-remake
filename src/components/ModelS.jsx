import React from 'react';
import Header from './Header';
import CarStat from './CarStat';
import CarStatDetail from './CarStatDetail';

function ModelS(){
  var modelSBackground = {
    backgroundImage: "url(https://tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg)",
    height: '1400px',
    color: 'black',
    backgroundSize: "cover"
  }

  var dividePipe = {
    fontSize: '40px',
  }

  return(
    <div style={modelSBackground}>
      <Header/>
      <div className="carType">
        <h3 className="tesla">Tesla</h3>
        <h1 className="teslaModel">Model S</h1>
      </div>
      <div className="statBox">
        <div>
          <CarStat
            stat={'2.4s'}
            />
          <span style={dividePipe}>|</span>
          <CarStat
            stat={'238mi'}
            />
          <span style={dividePipe}>|</span>
          <CarStat
            stat={'AWD'}
            />
        </div>

        <div>
          <CarStatDetail
            detail={'0-60mph'}
            />
          <CarStatDetail
            detail={'Range'}
            />
          <CarStatDetail
            detail={'Powertrain'}
            />
        </div>
      </div>
    </div>
  );
}

export default ModelS;
