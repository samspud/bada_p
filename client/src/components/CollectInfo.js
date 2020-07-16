import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './Button';
import TitleImg from '../images/collect/title.png';
import BottomImg from '../images/collect/info.png';
import PriceImg from '../images/collect/price.png'

import { post } from 'axios';

const DarkBackground = styled.div`
  overflow: scroll;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const InfoBlock = styled.div`
  width: 100vw;
  height: 300vw;

  display: flex;
  flex-direction: column;

  background: white;

  h2 {
    margin-top: 6.6vw;
    margin-bottom: 0;
    margin-left: 9.17vw;

    display: inline-block;

    font-size: 4vw;
    text-align: left;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 9.17vw;
    font-size: 2.97vw;
    text-align: left;
  }

  @media all and ( min-width:530px )
  {
    width: 530px;
    height: 1500px;

    h2 {
        margin-top: 16.28px;
        margin-left: 48.6px;

        font-size: 21.2px;
    }
    span {
        color: #517db5;
    }
    p {
        margin-left: 48.6px;
        font-size: 15.74px;
    }
  }
`;
const ImageCover = styled.div`
  display: flex;
  text-align:center;
  justify-content:center;
`;
const TitleImage = styled.img`
    width: 75.3vw;
    height: 25.64vw;

    margin-left: 3vw;
    padding: 0.01vw 0;

    @media all and ( min-width:530px )
    {
        width: 399.09px;
        height: 135.89px;

        margin-left: 15.9px;
        padding: 0.53px 0;
    }
`;
const PriceImage = styled.img`
    width: 100vw;
    height: 43.69vw;

    @media all and ( min-width:530px )
    {
        width: 530px;
        height: 231.56px;
    }
`;
const BottomImage = styled.img`
    width: 100vw;
    height: 71.3vw;

    @media all and ( min-width:530px )
    {
        width: 530px;
        height: 377.89px;
    }
`;

const InputCover = styled.div`
    width: 60.08vw;

    margin-top: 1.86vw;
    margin-left: 9.17vw;

    @media all and ( min-width:530px )
    {
        width: 318.42px;

        margin-top: 9.86px;
        margin-left: 48.6px;
    {
`;
const StyledInput = styled.input`
  background: none;

  padding: 1.2vw;

  border: none;
  width: 100%;
  font-size: 3.7vw;

  @media all and ( min-width:530px )
  {
    padding: 6.36px;

    font-size: 19.61px;
  }
`;
const StyledInputFile = styled.input`
  width: 100%;
  font-size: 3vw;

  @media all and ( min-width:530px )
  {
    font-size: 15.9px;
  }
`;
const InputUnderline = styled.div`
  width: 60.08vw;
  margin-left: 9.17vw;
  border: 1px solid #9b9b9b;

  @media all and ( min-width:530px )
  {
    width: 318.42px;
    margin-left: 48.6px;
  }
`;

const AgreeCover = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 3.4vw 0;

  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 2.86vw;
    font-size: 3.7vw;
    text-align: left;
  }

  @media all and ( min-width:530px )
  {
    padding: 18.02px 0;

    p {
        margin-left: 15.16px;
        font-size: 19.61px;
    }
  }
`;
const StyledCheckbox = styled.input`
  margin-left: 9.17vw;

  @media all and ( min-width:530px )
  {
    margin-left: 48.6px;
  }
`;

const ButtonGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const ShortMarginButton = styled(Button)`
  width: 22.4vw;
  height: 9.64vw;
  border-radius: 3rem;
  box-shadow: 0 0.3vw 0.5vw 0 #000000;
  font-size: 3vw;
  font-family: 'NanumBarunGothicBold';

& + & {
    margin-left: 1rem;
    }
    outline: 0;

    @media all and ( min-width:530px )
    {
        width: 118.72px;
        height: 51.09px;
        border-radius: 3rem;
        box-shadow: 0 1.59px 2.65px 0 #000000;
        font-size: 15.9px;
    }
`;

function CollectInfo({ 
    onConfirm,
    onCancel,
    visible
 }) {
    const [inputs, setInputs] = useState({
        file: null,
        name: '',
        phone: '',
        url: '',
        image: '',
        isChecked: false
    });

    const {file, name, phone, url, image, isChecked} = inputs;

    const onInnerConfrim = () => {
        if (isChecked && name !== '' && phone !== '' && (url !== '' || image !== ''))
        {
            onSubmit();
            onConfirm();
            onReset();
        }
    }

    const onInnerCancel = () => {
        onReset();
        onCancel();
    }

    const onChange = (e) => {
        switch(e.target.name)
        {
            case 'name':
            case 'phone':
            case 'url':
                {
                    const { value, name } = e.target;
                    setInputs({
                        ...inputs, 
                        [name]: value
                    });

                    break;
                }
            case 'image':
                {
                    const { value, name } = e.target;

                    setInputs({
                        ...inputs,
                        [name]: value,
                        file: e.target.files[0]
                    });

                    break;
                }
            case 'isChecked':
                {
                    const { checked, name } = e.target;
                    setInputs({
                        ...inputs,
                        [name]: checked
                    });

                    break; 
                }
            default:
                break;
        }
    };

    const onReset = () => {
        setInputs({
            file: null,
            name: '',
            phone: '',
            url: '',
            image: '',
            isChecked: false
          })
    };

    //서버전송함수
    const onSubmit = () => {
        addInfo()
            .then((response) => {
                console.log(response.data);
        })
    }

    const addInfo = () => {
        const postUrl = '/api/bada';
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone)
        formData.append('url', url)
        formData.append('image', file)

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    return post(postUrl, formData, config);
    }

    if (!visible) {
        return null;
    }

    return (
        <ThemeProvider
        theme={{
        palette: {
            sky: '#c1dbef',
            grayshallow: '#ebebeb',
        }
        }}
    >
        <DarkBackground>
        <InfoBlock>
            <ImageCover>
            <TitleImage src={TitleImg}/>
            </ImageCover>
            <ImageCover>
            <PriceImage src={PriceImg}/>
            </ImageCover>
            <h2>
                이름 (실명) <span color='#517db5'>*</span>
            </h2>
            <p>
                본인 실명을 입력해주세요
            </p>
            <InputCover>
            <StyledInput name="name" onChange={onChange} placeholder="내 답변(필수)"/>
            </InputCover>
            <InputUnderline/>

            <h2>
                휴대폰 번호 <span color='#517db5'>*</span>
            </h2>
            <p>
                하이폰을 삽입하여 입력해주세요. (예) 010-1234-5678
            </p>
            <InputCover>
            <StyledInput name="phone" onChange={onChange} placeholder="내 답변(필수)"/>
            </InputCover>
            <InputUnderline/>

            <h2>
                공유 내용
            </h2>
            <br/>
            <p><b>
                1번 또는 2번 중 하나를 골라 입력해주세요.
            </b></p>
            <br/>
            <p>
                1. 테스트를 공유한 SNS 게시글의 URL을 입력해주세요.
            </p>
            <p>
                (페이스북, 인스타그램, 트위터 등)
            </p>
            <InputCover>
            <StyledInput name="url" onChange={onChange} placeholder="내 답변"/>
            </InputCover>
            <InputUnderline/>

            <br/>
            <p>
                2. 테스트를 공유한 메신저의 캡처 이미지(JPG. PNG.)를 선택해주세요.
            </p>
            <p>
                (카카오톡, 라인 등)
            </p>
            <InputCover>
            <StyledInputFile
                name="image"
                accept='image/jpg,image/png'
                onChange={onChange}
                type="file"
                file={file}
                value={image}
            />
            </InputCover>
            <br/>
            <br/>
            <ImageCover>
            <BottomImage src={BottomImg}/>
            </ImageCover>

            <AgreeCover>

            <StyledCheckbox
                name="isChecked"
                onChange={onChange}
                type="checkbox"
            />
            <p>
                위 개인정보 수집 및 이용안내에 동의합니다. 
            </p>
            
            
            </AgreeCover>
            <ButtonGroup>
            <ShortMarginButton onClick={onInnerCancel} color="grayshallow">
                취소하기
            </ShortMarginButton>
            <ShortMarginButton onClick={onInnerConfrim} color="sky">
                제출하기
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