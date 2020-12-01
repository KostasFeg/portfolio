import React from 'react';
import '../Styles/Home.css';
import portfolio from './Illustrations/portfolio.svg';
import expressjs from './Illustrations/expressjs.svg';
import mongodb from './Illustrations/mongodb.svg';
import reactjs from './Illustrations/react-js.svg';
import nodejs from './Illustrations/node-js.svg';
import github from './icons/github.svg';
import instagram from './icons/instagram.svg';
import facebook from './icons/facebook.svg';
import materialui from './icons/materialui.svg';
import tensorflow from './icons/tensorflow.svg';

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
      <div className="stack">
        <h3>Stack i'm using:</h3>
        <div className="stack-icons">
          <img alt="mongoicon" src={mongodb} />
          <img alt="expressicon" src={expressjs} />
          <img alt="reacticon" src={reactjs} />
          <img alt="nodeicon" src={nodejs} />
        </div>
        <h5>
          In the constantly expanding world of web development having a system
          that works is really important. Based on that, the frameworks above
          fit my needs, granding flexibility and expandability while being
          modern solutions.
        </h5>
      </div>
      <div className="stack2">
        <h4>Other technologies I use</h4>
        <div className="stack2content">
          <div className="stack2card">
            <div className="stack2cardcontent">
              <img
                className="card2img"
                alt="material ui logo"
                src={materialui}
              />
              <h5 className="card2title">Material Ui</h5>
            </div>
          </div>
          <div className="stack2card">
            <div className="stack2cardcontent">
              <img
                className="card2img"
                alt="material ui logo"
                src={tensorflow}
              />
              <h5 className="card2title">Tensorflow JS</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <img alt="github logo" src={github} />
        <img alt="instagram logo" src={instagram} />
        <img alt="facebook logo" src={facebook} />
      </div>
    </div>
  );
};

export default Home;
