import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BaseButton from 'js/components/atoms/BaseButton';

const Home = ({ text, reset, setText }) => {
  let history = useHistory();

  const goToAbout = () => {
    history.push('/about');
  }

  return (
    <div>
      <p>home</p>
      <BaseButton onClick={() => goToAbout()}>Aboutへ</BaseButton>
      <BaseButton onClick={() => setText('textセット済')}>テキストをセット</BaseButton>
      <BaseButton onClick={() => reset()}>リセット</BaseButton>
      <p>セットしたテキストは: {text}</p>
    </div>
  )
}

Home.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
}

export default Home;