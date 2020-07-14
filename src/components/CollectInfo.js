import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './Button';
import Input from './Input';

const DarkBackground = styled.div`
  overflow: scroll;
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

const InfoBlock = styled.div`
  width: 90vw;
  height: auto;

  display: flex;
  flex-direction: column;

  background: white;

  h2 {
    margin-top: 4vw;
    margin-bottom: 0;
    margin-left: 3vw;

    font-size: 4vw;
    text-align: left;
  }
  p {
    margin-top: 0;
    margin-left: 3vw;
    font-size: 3vw;
    text-align: left;
  }

  @media all and ( min-width:768px )
  {
    width: 691.2px;

    h2 {
    margin-top: 30.72px;
    margin-bottom: 0;
    margin-left: 23.04px;

    font-size: 32px;
    text-align: left;
    }

    p {
    margin-top: 0;
    margin-left: 23.04px;
    font-size: 23.04px;
    text-align: left;
    }
  }
`;

const Title1 = styled.div`

    text-align: left;

    width: 80vw;
    margin: 0;
    padding: 0.01vw 0;
    background-color: #f06595;
    text-align: left;

    h1 {
        color: white;
        font-size: 4vw;
        margin-left: 3vw;
    }

    @media all and ( min-width:768px )
    {
    width: 614.4px;

    h1 {
        color: white;
        font-size: 32px;
        margin-left: 23.04px;
    }
`;

const Title2 = styled.div`

    text-align: left;

    width: 30vw;
    margin: 0;
    padding: 0.01vw 0;
    background-color: #f06595;
    text-align: left;

    h1 {
        color: white;
        font-size: 4vw;
        margin-left: 3vw;
    }

    @media all and ( min-width:768px )
    {
    width: 240px;

    h1 {
        color: white;
        font-size: 32px;
        margin-left: 23.04px;
    }
`;

const ButtonGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
`;

const ShortMarginButton = styled(Button)`

& + & {
    margin-left: 0.2rem;
    }
    outline: 0;
`;

const InputCover = styled.div`
    width: 80%;

    margin-left: 3vw;
    margin-bottom: 10vw;
    display: flex;
    align-items: left;
    justify-content: left;

    @media all and ( min-width:768px )
        margin-left: 23.04px;
        margin-bottom: 76.8px;
    {
`;

const EventInput = styled(Input)`
    
`;

function CollectInfo({ 
    onConfirm,
    onCancel,
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
        <InfoBlock>
            <Title1>
                <h1><li>개인정보 수집 및 이용 동의 안내</li></h1>
            </Title1>
            <p>
                <br/>
                1. 수집하는 항목 : 이름(실명), 휴대폰번호
                <br/>
                2. 개인정보 수집 이용 목적 : 당첨자에 대한 이벤트 경품 제공
                <br/>
                3. 개인정보의 보유 및 이용 기간 : 이벤트 경품 제공 완료 후 7일
            </p>
            <h2>
                이름 (실명)
            </h2>
            <p>
                본인 실명을 입력해주세요
            </p>
            <InputCover>
            <EventInput placeholder="이름"/>
            </InputCover>

            <h2>
                휴대폰 번호
            </h2>
            <p>
                하이폰 삽입하여 입력해주세요. (예) 010-1234-5678
            </p>
            <InputCover>
            <EventInput placeholder="번호"/>
            </InputCover>

            <Title2>
                <h1>확인해주세요</h1>
            </Title2>
            <p>
                <br/>
                * 어쩌고저쩌고
                <br/>
                * 어쩌고저쩌고
                <br/>
                * 어쩌고저쩌고
                <br/>
                * 어쩌고저쩌고
            </p>
            <ButtonGroup>
            <ShortMarginButton onClick={onConfirm} color="pink">
                제출
            </ShortMarginButton>
            <ShortMarginButton onClick={onCancel} color="pink">
                취소
            </ShortMarginButton>
            </ButtonGroup>
        </InfoBlock>
        </DarkBackground>
        </ThemeProvider>
    );
}

CollectInfo.defaultProps = {
};

export default CollectInfo;