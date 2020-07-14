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
  width: 80vw;
  padding: 5vw;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;

    font-family: 'NanumBarunpen Bold';
    font-size: 7vw;
    text-align: left;
  }
  p {
    font-family: 'NanumBarunpen Regular';
    font-size: 5vw;
    text-align: left;
  }

  @media all and ( min-width:768px )
  {
    width: 614.4px;
    padding: 38.4px;
    background: white;
    border-radius: 2px;

    h3 {
        margin: 0;
    
        font-family: 'NanumBarunpen Bold';
        font-size: 53.76px;
        text-align: left;
      }
      p {
        font-family: 'NanumBarunpen Regular';
        font-size: 38.4px;
        text-align: left;
      }
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
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
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06595'
        }
        }}
    >
        <DarkBackground>
        <DialogBlock>
            <h3>{title}</h3>
            <p>{children}</p>
            <ButtonGroup>
                <ShortMarginButton onClick={onYes} color="blue">
                    {yesText}
                </ShortMarginButton>
                <ShortMarginButton onClick={onNo} color="blue">
                    {noText}
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