import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>home</p>
      <Link to="/About">Aboutへ</Link>
    </div>
  )
}

export default Home;