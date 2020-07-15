import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './Button';

const DarkBackground = styled.div`
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 88vw;
  height: 40vw;
  padding: 3.25vw;
  background: white;
  border-radius: 2px;

  h3 {
    margin-top: 6vw;

    font-family: 'NanumBarunGothicBold';
    font-size: 6.5vw;
    text-align: center;
  }
  p {
    font-family: 'NanumBarunGothic';
    font-size: 4.44vw;
    text-align: center;
  }

  @media all and ( min-width:530px )
  {
    width: 466.4px;
    height: 212px;
    padding: 17.23px;
    border-radius: 2px;

    h3 {
      margin-top: 31.8px;

      font-size: 34.45px;
      }
    p {
      font-size: 23px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`

  font-family: 'NotoSansCJKkr R';

  width: 18.87vw;

  font-size: 3.8vw;
  & + & {
    margin-left: 1.5rem;
  }

  @media all and ( min-width:530px )
  {
    width: 100px;
    font-size: 20.14px;
  }
`;

function Dialog({ 
    title, 
    children, 
    yesText, 
    noText,
    onYes,
    onNo,
    visible
 }) {
    if (!visible) {
        return null;
    }

    return (
        <ThemeProvider
        theme={{
        palette: {
            white: '#ffffff',
            blue: '#228be6',
            gray: '#495057',
        }
        }}
    >
        <DarkBackground>
        <DialogBlock>
            <h3>{title}</h3>
            <p>{children}</p>
            <ButtonGroup>
                <ShortMarginButton onClick={onNo} color="white">
                    {noText}
                </ShortMarginButton>
                <ShortMarginButton onClick={onYes} color="white" fontcolor="blue">
                    {yesText}
                </ShortMarginButton>
            </ButtonGroup>
        </DialogBlock>
        </DarkBackground>
        </ThemeProvider>
    );
}

Dialog.defaultProps = {
    yesText: '예',
    noText: '아니오'
};

export default Dialog;