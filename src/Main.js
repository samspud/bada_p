import React, { useState } from 'react'
import styles from './Main.module.css'
import imgBGMain from './images/main/main.png'
import C_1 from './images/main/1.png'
import C_2 from './images/main/2.png'
import C_3 from './images/main/3.png'
import C_4 from './images/main/4.png'
import C_5 from './images/main/5.png'
import C_6 from './images/main/6.png'
import C_7 from './images/main/7.png'
import C_8 from './images/main/8.png'
import C_9 from './images/main/9.png'

function GetImgCharacter(number) {

    switch (number)
    {
        case 1:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_1} alt='character'/>
                </div>
            );
        case 2:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_2} alt='character'/>
                </div>
            );
        case 3:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_3} alt='character'/>
                </div>
            );
        case 4:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_4} alt='character'/>
                </div>
            );
        case 5:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_5} alt='character'/>
                </div>
            );
        case 6:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_6} alt='character'/>
                </div>
            );
        case 7:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_7} alt='character'/>
                </div>
            );
        case 8:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_8} alt='character'/>
                </div>
            );
        case 9:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_9} alt='character'/>
                </div>
            );
        default:
            return (
                <div className={styles.ImageBox}>
                    <img className={styles.ImageChar} src={C_1} alt='character'/>
                </div>
            );
    }
}

function CreateQuestion(number, onClick_point, onNext) {
    if ( questions[number - 1].qn === 3 )
    {
        return (
            <>
            <div className={styles.Question_1} onClick={() => onClick_point(1)}>
                <button className={styles.QuestionBox}>
                    <div className={styles.QuestionText}> 
                        {SplittText(questions[number - 1].q1)}
                    </div>
                </button>
                <div className={styles.Circle_1}>
                    1
                </div>
            </div>
            <div className={styles.Question_2} onClick={() => onClick_point(2)}>
                <button className={styles.QuestionBox}>
                    <div className={styles.QuestionText}> 
                        {SplittText(questions[number - 1].q2)}
                    </div>
                </button>
                <div className={styles.Circle_2}>
                    2
                </div>
                
            </div>
            <div className={styles.Question_3} onClick={() => onClick_point(2)}>
                <button className={styles.QuestionBox}>
                    <div className={styles.QuestionText}> 
                        {SplittText(questions[number - 1].q3)}
                    </div>
                </button>
                <div className={styles.Circle_3}>
                    3
                </div>
                
            </div>
            </>
        );
    }
    else
    {
        return (
            <>
            <div className={styles.Question_1} onClick={() => onClick_point(1)}>
                <button className={styles.QuestionBox}>
                    <div className={styles.QuestionText}> 
                        {SplittText(questions[number - 1].q1)}
                    </div>
                </button>
                <div className={styles.Circle_1}>
                    1
                </div>
            </div>
            <div className={styles.Question_2} onClick={() => onClick_point(2)}>
                <button className={styles.QuestionBox}>
                    <div className={styles.QuestionText}> 
                        {SplittText(questions[number - 1].q2)}
                    </div>
                </button>
                <div className={styles.Circle_2}>
                    2
                </div>
                
            </div>
            </>
        );
    }
}

let value_0 = 0;
let value_1 = 0;
let value_2 = 0;
let value_3 = 0;

function Main( {history} )
{
    const [number, setNumber] = useState(1);

    const onClick_point = (props) => {
        let isThreeQ = false;
        const point = 3 - props;    // 몇 번째 선택지 고르느냐 분간하기 위한 수치

        if ( questions[number - 1].qn === 3 )
        {
            isThreeQ = true;
        }

        switch (questions[number - 1].type)
        {
            case 0:
                {
                    isThreeQ ? value_0 += point : value_0 += (point - 1);
                    break;
                }
            case 1:
                {
                    isThreeQ ? value_1 += point : value_1 += (point - 1);
                    break;
                }
            case 2:
                {
                    isThreeQ ? value_2 += point : value_2 += (point - 1);
                    break;
                }
            case 3:
                {
                    isThreeQ ? value_3 += 2 : value_3 += 1;
                    break;
                }
            default:
                break;
        }

        console.log(value_0);
        console.log(value_1);
        console.log(value_2);
        console.log(value_3);

        if ( number >= 9)
        {
            value_0 = value_0 >= 2 ? 0 : 1;
            value_1 = value_1 >= 3 ? 0 : 1;
            value_2 = value_2 >= 1 ? 0 : 1;
            value_3 = value_3 >= 2 ? 0 : 1;

            let value = value_0 * 1000 + value_1 * 100 + value_2 * 10 + value_3;

            console.log(value);

            let address = '/result/' + value;
            history.push(address);
        }
        else
            onNext();
    }
   
    const onNext = () => {
        if ( number <= 9 )
        {
            setNumber(number + 1);
        }
    }

    if ( number > 9 ) 
    {       
        return;
    }
    else
    {
        return (
            <>
            <div className={styles.Main}>
                <div className={styles.MainContext}>

                    {/* 배경 */}
                    <img className={styles.imgBG} src={imgBGMain} alt='mainBG'/>

                    {/* 숫자 */}
                    <div className={styles.Number}>
                        {number}
                    </div>

                    {/* 제목 */}
                    <div className={styles.TitleBox}>
                        <div className={styles.Title}>
                            {questions[number - 1].title}
                        </div>
                    </div>

                    {/* 이미지 */}
                    {GetImgCharacter(number)}

                    {/* 선지 */}
                    {CreateQuestion(number, onClick_point, onNext)}
                </div>
            </div>
            </>
        );
    }
}

function SplittText(text) {
    let split = text.split('\\n');
    
    return (
        <div>
            {split[0]}
            <br/>
            {split[1]}
        </div>
    )
}

// type 0 : 자아존중감, 1 : 스트레스 표출, 2 : 대인관계 스트레스, 3 : 의무
const questions = [
    {
        index: 1,
        title: '즐거운 파티 준비! 오늘 나의 의상 컨셉은?',
        type: 0,
        qn: 2,
        q1: '내가 입는 게 곧 명품이지!\\n남들의 시선은 중요하지 않아',
        q2: '사람들에게 잘 보이고 싶어!\\n좀 더 근사한 옷을 입어야지',
        q3: ''
    },
    {
        index: 2,
        title: '파티로 가는 길에 버스를 놓쳐 늦은 당신. 이 속상한 마음을 어떻게 달랠까요?',
        type: 1,
        qn: 2,
        q1: '아 진짜 속상해! 하면서\\n친구에게 전화 걸어 하소연한다',
        q2: '‘내 잘못이니 누구 탓하지 말자’라고\\n생각하며 참는다',
        q3: ''
    },
    {
        index: 3,
        title: '파티에서 6명씩 모여 테이블에 앉으라고 합니다. 당신의 속마음은?',
        type: 2,
        qn: 2,
        q1: '나랑 친한 친구들끼리 앉는 게 편할 것 같아',
        q2: '새롭고 매력적인 사람들과 친해져볼래',
        q3: ''
    },
    {
        index: 4,
        title: '조별로 게임을 시작한다고 합니다. 어떤 자세로 임할 것인가요?',
        type: 3,
        qn: 3,
        q1: '지는 건 싫어. 게임은 이겨야지! 최선을 다한다',
        q2: '재밌게 하면 그만이지~\\n승부에 상관 없이 마음 편히 한다',
        q3: '나는 같이 하는 거 보다는\\n그냥 구경만 하는 게 좋아'
    },
    {
        index: 5,
        title: '근처에 있는 사람이 무례하게 굽니다. 어떻게 할까요?',
        type: 1,
        qn: 2,
        q1: '왜 저런 말을 하는 걸까? 싫은 티를 조금씩 낸다',
        q2: '일단 하하호호 웃으면서 대한다',
        q3: ''
    },
    {
        index: 6,
        title: '옆테이블에서 누군가를 열심히 칭찬하고 있네요! 누구 이야기일까요?',
        type: 0,
        qn: 3,
        q1: '나를 칭찬하고 있네? 고마움을 표현한다',
        q2: '혹시 내가 아닐까? 기대한다',
        q3: '내 얘기는 아니겠지. 못 들은 척 한다'
    },
    {
        index: 7,
        title: '또롱! 집에서 메시지가 왔네요. 메시지의 내용은?',
        type: 2,
        qn: 2,
        q1: '어디 간거야! 얼른 들어와!',
        q2: '놀러 나갔니? 밥은 먹었구?',
        q3: ''
    },
    {
        index: 8,
        title: '파티에서 누군가 실수로 당신이 아끼는 신발에 포도주스를 쏟았어요! 하지만 상대는 당신에게 쏟은 걸 모르는 것 같아요.',
        type: 1,
        qn: 3,
        q1: '아니 저기요! 제 신발에 쏟으시면 어떡해요!\\n화를 낸다.',
        q2: '하하.. 지금 제 신발에 음료수 쏟으셨어요.\\n웃으며 말한다',
        q3: '모르는 거 같은데 어떡하지? 하.. 일단 참고 본다'
    },
    {
        index: 9,
        title: '파티가 끝나고 일상으로 돌아가는 당신. 지금 무슨 생각을 하고 있나요?',
        type: 3,
        qn: 2,
        q1: '오늘 너무 논 거 아닐까? 해야할 게 많은데\\n너무 시간을 막 보낸 것 같아',
        q2: '아 최고였어! 역시 즐기며 살아야 돼!',
        q3: ''
    }
  ];

export default Main;