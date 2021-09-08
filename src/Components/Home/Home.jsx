import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return(
    <div className="home-container">
      <Link to="/form" className="home-btn">
        <p className="home-btn-p">Realizar Reclamo</p>
      </Link>
      <Link to="/view" className="home-btn">
        <p className="home-btn-p">Ver Todos Los Reclamos</p>
      </Link>
    </div>
  );
}

export default Home;