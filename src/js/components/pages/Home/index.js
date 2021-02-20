import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseButton from 'js/components/atoms/BaseButton';

const Home = () => {
  let history = useHistory();

  const goToAbout = () => {
    history.push('/about');
  }

  return (
    <div>
      <p>home</p>
      <BaseButton onClick={() => goToAbout()}>Aboutへ</BaseButton>
    </div>
  )
}

export default Home;