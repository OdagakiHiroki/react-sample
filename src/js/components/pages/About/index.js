import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BaseButton from 'js/components/atoms/BaseButton';

const About = ({ text }) => {
  let history = useHistory();

  const goToHome = () => {
    history.push('/');
  }

  return (
    <div>
      <p>about</p>
      <BaseButton onClick={() => goToHome()}>Homeへ</BaseButton>
      <p>/homeでセットしたテキストは: {text}</p>
    </div>
  )
}

About.propTypes = {
  text: PropTypes.string,
};

export default About;