import React from 'react';
import '../Styles/Home.css';
import portfolio from './Illustrations/portfolio.svg';
import htmlcssjs from './Illustrations/csshtmljs.svg';
const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="typography" id="card">
          <h1>Kostas Fegoulis</h1>
          <p>
            I'm a 25 year old web developer based in Athens, Greece. Loving what
            to do and striving for progress makes it not only easier but fun.
          </p>
        </div>
        <div className="card1" id="card">
          <img alt="react-icon" src={portfolio} />
        </div>
      </div>
      <div className="divider"> </div>
      <div>
        <p>Stack im using</p>
      </div>
    </div>
  );
};

export default Home;
