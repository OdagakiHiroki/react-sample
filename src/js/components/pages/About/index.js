import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseButton from 'js/components/atoms/BaseButton';

const About = () => {
  let history = useHistory();

  const goToHome = () => {
    history.push('/');
  }

  return (
    <div>
      <p>about</p>
      <BaseButton onClick={() => goToHome()}>Homeへ</BaseButton>
    </div>
  )
}

export default About;