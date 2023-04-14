import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Link to="/counter">
        <button>Counter</button>
      </Link>
      <Link to="/modal">
        <button>Modal</button>
      </Link>
      <Link to="/quiz">
        <button>Quiz</button>
      </Link>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </div>
  );
};
