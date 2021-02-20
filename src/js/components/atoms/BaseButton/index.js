import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './style';

const BaseButton = ({
  children,
  onClick,
}) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  )
}

BaseButton.prototypes = {
  onClick: PropTypes.func,
}

export default BaseButton;