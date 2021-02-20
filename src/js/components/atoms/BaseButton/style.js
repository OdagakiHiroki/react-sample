import styled from 'styled-components';
import color from 'js/common/config/color';

const Button = styled.button`
  && {
    background-color: ${color.accent};
    border: none;
    color: ${color.white};
  }
`;

export {
  Button
}