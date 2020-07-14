import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;

`;

function Input(
    {placeholder}
) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <StyledInput placeholder={placeholder} onChange={onChange} value={text}  />
    </div>
  );
}

export default Input;