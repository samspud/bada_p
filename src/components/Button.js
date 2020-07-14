import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
        cursor: pointer;
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  margin: 1vw;
  width: 15vw;
  height: 6vw;
  font-size: 3vw;

  border: none;
  border-radius: 4px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: 'NanumBarunpen Bold';

  @media all and ( min-width:768px )
  {
    margin: 7.68px;
    width: 76.8px;
    height: 46.08px;
    font-size: 23.04px;
  
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: 'NanumBarunpen Bold';
    
  }

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'gray'
};

export default Button;