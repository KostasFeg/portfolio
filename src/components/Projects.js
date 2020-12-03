import React from 'react';
import '../Styles/Projects.css';
import expressjs from './Illustrations/expressjs.svg';
import mongodb from './Illustrations/mongodb.svg';
import reactjs from './Illustrations/react-js.svg';
import nodejs from './Illustrations/node-js.svg';
import materialui from './icons/materialui.svg';
import tensorflow from './icons/tensorflow.svg';
import dogshelter from './icons/dog-shelter.png';
import simpleweather from './icons/simpleweather.png';

const Projects = () => {
  return (
    <div>
      <div className="projectContainer">
        <div className="projectCard">
          <img alt="random" src={simpleweather} />
          <h3>Simple-Weather</h3>
          <p>
            As the name states: a simple weather app based on the openweathermap
            free api that covers the basics.
          </p>
          <div className="projectIcons">
            <img className="card2img" alt="material ui logo" src={reactjs} />
            <img className="card2img" alt="material ui logo" src={materialui} />
          </div>
        </div>
        <div className="projectCard">
          <img alt="random" src={dogshelter} />
          <h3>Dog-Shelter: A better place for strays</h3>
          <p>
            A full-stack CRUD project: Analyze dog breeds with TensorFlowjs,
            make your user-account, like other posts and see info about the
            dogs.
          </p>
          <div className="projectIcons">
            <img className="card2img" alt="material ui logo" src={nodejs} />
            <img className="card2img" alt="material ui logo" src={mongodb} />
            <img className="card2img" alt="material ui logo" src={expressjs} />
            <img className="card2img" alt="material ui logo" src={reactjs} />
            <img className="card2img" alt="material ui logo" src={materialui} />
            <img className="card2img" alt="material ui logo" src={tensorflow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
