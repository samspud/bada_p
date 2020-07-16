import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color, fontcolor }) => {
    const selected = theme.palette[color];
    const selectedFont = theme.palette[fontcolor];
    return css`
      background: ${selected};
      color: ${selectedFont};
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

  @media all and ( min-width:530px )
  {
    margin: 5.3px;
    width: 79.5px;
    height: 31.8px;
    font-size: 15.9px;
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