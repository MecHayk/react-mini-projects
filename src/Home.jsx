import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.scss';

export const Home = () => {
  return (
    <div className="homeBody">
      <h1>Mini Projects</h1>
      <div className="home">
        <Link to="/counter">
          <div>
            <p>Counter</p>
          </div>
        </Link>
        <Link to="/modal">
          <div>
            {' '}
            <p>Modal</p>
          </div>
        </Link>
        <Link to="/quiz">
          <div>
            <p>Quiz</p>
          </div>
        </Link>
        <Link to="/users">
          <div>
            <p>Users</p>
          </div>
        </Link>
        <Link to="/currency">
          <div>
            <p>Currency</p>
          </div>
        </Link>
        <Link to="/photo">
          <div>
            <p>Photo</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
