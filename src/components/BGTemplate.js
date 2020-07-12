import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  border: 1px solid red;

  text-align: center;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;