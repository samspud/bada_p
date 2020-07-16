import React, { useState } from 'react'
import styles from './Result.module.css'
import Dialog from './components/Dialog'
import Event from './components/CollectInfo'

import imgBGResult from './images/result/result.png'
import C_1 from './images/result/0000.png'
import C_2 from './images/result/0001.png'
import C_3 from './images/result/0010.png'
import C_4 from './images/result/0011.png'
import C_5 from './images/result/0100.png'
import C_6 from './images/result/0101.png'
import C_7 from './images/result/0110.png'
import C_8 from './images/result/0111.png'
import C_9 from './images/result/1000.png'
import C_10 from './images/result/1001.png'
import C_11 from './images/result/1010.png'
import C_12 from './images/result/1011.png'
import C_13 from './images/result/1100.png'
import C_14 from './images/result/1101.png'
import C_15 from './images/result/1110.png'
import C_16 from './images/result/1111.png'

let code = '';

function GetImageChar(props)
{
    // type 0 : 자아존중감, 1 : 스트레스 표출, 2 : 대인관계 스트레스, 3 : 의무
    const v_0 = parseInt(props / 1000);
    const v_1 = parseInt((props % 1000) / 100);
    const v_2 = parseInt((props % 100) / 10);
    const v_3 = parseInt(props % 10);
    
    code = v_3.toString() + v_2.toString() + v_0.toString() + v_1.toString();

    switch (code)
    {
        case '0000':
            return (
                <img className={styles.imgChar} src={C_1} alt='character'/>
            );
        case '0001':
            return (
                <img className={styles.imgChar} src={C_2} alt='character'/>
            );
        case '0010':
            return (
                <img className={styles.imgChar} src={C_3} alt='character'/>
            );
        case '0011':
            return (
                <img className={styles.imgChar} src={C_4} alt='character'/>
            );
        case '0100':
            return (
                <img className={styles.imgChar} src={C_5} alt='character'/>
            );
        case '0101':
            return (
                <img className={styles.imgChar} src={C_6} alt='character'/>
            );
        case '0110':
            return (
                <img className={styles.imgChar} src={C_7} alt='character'/>
            );
        case '0111':
            return (
                <img className={styles.imgChar} src={C_8} alt='character'/>
            );
        case '1000':
            return (
                <img className={styles.imgChar} src={C_9} alt='character'/>
            );
        case '1001':
            return (
                <img className={styles.imgChar} src={C_10} alt='character'/>
            );
        case '1010':
            return (
                <img className={styles.imgChar} src={C_11} alt='character'/>
            );
        case '1011':
            return (
                <img className={styles.imgChar} src={C_12} alt='character'/>
            );
        case '1100':
            return (
                <img className={styles.imgChar} src={C_13} alt='character'/>
            );
        case '1101':
            return (
                <img className={styles.imgChar} src={C_14} alt='character'/>
            );
        case '1110':
            return (
                <img className={styles.imgChar} src={C_15} alt='character'/>
            );
        case '1111':
            return (
                <img className={styles.imgChar} src={C_16} alt='character'/>
            );
        default:
            return (
                <img className={styles.imgChar} src={C_1} alt='character'/>
            );
    }
}

function Result( {match})
{
    const [dialog, setDialog] = useState(false);
    const [event, setEvent] = useState(false);

    const onClickShare = (type) => {
        // type 0: insta, 1: facebook, 2: kakao, 3: twitter, 4: line
        setDialog(true);
        onShare(type);
    };

    const onYes = () => {
        //설문 동의
        setDialog(false);
        setEvent(true);
    };

    const onNo = () => {
        //설문 비동의
        setDialog(false);
        setEvent(false);
    };

    const onConfirm = () => {
        //설문제출
        setEvent(false);
    };

    const onCancel = () => {
        //설문취소
        setEvent(false);
    };

    const onShare = (snsType) => {
        //실제공유

        switch(snsType)
        {
            case 0:
                {
                    const mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
                    const userAgent = navigator.userAgent.toLowerCase();

                    if (mobile) {
                        if ( userAgent.indexOf('android') > -1) {
                            //안드로이드
                            window.open('intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end','blank');
                        } else if ( userAgent.indexOf("iphone") > -1||userAgent.indexOf("ipad") > -1||userAgent.indexOf("ipod") > -1 ) {
                            //IOS
                            window.open('instagram://media','blank');
                        } else {
                            //아이폰, 안드로이드 외
                            window.open('https://www.instagram.com/direct/inbox/','blank');
                        }
                    }
                    else {
                        window.open('https://www.instagram.com/direct/inbox/','blank');
                    }
                    
                    break; 
                }
                
            case 1:
                {
                    window.open('http://www.facebook.com/sharer.php?u=http://fonfonsea1388.me/&p[images][0]=','blank');
                    break;
                }
                
            case 2:
                {
                    window.Kakao.Link.sendDefault({
                        objectType: 'feed',
                        content: {
                          title: '1388 Find Freinds',
                          description: '나는 무슨 바다친구?',
                          imageUrl:
                            'http://fonfonsea1388.me/static/media/home.a8d19f09.png',
                          link: {
                            mobileWebUrl: 'http://fonfonsea1388.me',
                            androidExecParams: 'test',
                          },
                        },
                        buttons: [
                          {
                            title: '웹으로 이동',
                            link: {
                              mobileWebUrl: 'http://fonfonsea1388.me',
                            }, 
                          },
                        ],
                        success: function(response) {
                          console.log(response);
                        },
                        fail: function(error) {
                          console.log(error);
                        }
                      });
                    break;
                }
    
            case 3:
                {
                    window.open("https://twitter.com/intent/tweet?&url=http://fonfonsea1388.me/",'blank');
                    break;
                }
         
            case 4:
                {
                    const sns_title = "1388 바다";
                    const sns_summary = "바다 친구들";
                    const sns_br = "\n";
                    const url = "https://social-plugins.line.me/lineit/share?url=http://fonfonsea1388.me&text=" + encodeURIComponent(sns_title + sns_br + sns_summary + sns_br);
                    window.open(url, 'blank');
                    break;
                }
               
            default:
                break;
        }
    }

    const onClickHelp = () => {
        window.open("https://www.cyber1388.kr:447", 'blank');
    }
   

    return (
        
        <>
            <div className={styles.Result}>
                <div className={styles.ResultContext}>

                    {/* 배경 */}
                    <img className={styles.imgBG} src={imgBGResult} alt='resultBG'/>

                    {/* 이미지캐릭터 */}
                    {GetImageChar(match.params.code)}

                    {/* 공유기능 */}
                    <div className={styles.SNSCover}>
                        <div className={styles.Instagram}>
                            <button onClick={() => onClickShare(0)} className={styles.SNSButton}>

                            </button>
                        </div>
                        <div className={styles.Facebook}>
                            <button onClick={() => onClickShare(1)} className={styles.SNSButton}>

                            </button>
                        </div>
                        <div id="kakao" className={styles.KaKaoTalk}>
                            <button onClick={() => onClickShare(2)} className={styles.SNSButton}>

                            </button>
                        </div>
                        <div className={styles.Twitter}>
                            <button onClick={() => onClickShare(3)} className={styles.SNSButton}>

                            </button>
                        </div>
                        <div className={styles.Line}>
                            <button onClick={() => onClickShare(4)} className={styles.SNSButton}>
                            
                            </button>
                        </div>
                    </div>
                    
                    <div className={styles.HelpSite}>
                        <button className={styles.HelpSiteBtn} onClick={onClickHelp}/>
                    </div>
                    

                    <Dialog
                        title="이벤트에 참여하시겠습니까?"
                        yesText="예"
                        noText="아니오"
                        onYes={onYes}
                        onNo={onNo}
                        visible={dialog}
                        >
                            참여하시면 개인정보 동의 창으로 넘어갑니다.
                    </Dialog>
                    <Event
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        visible={event}>
                        
                    </Event>
                </div>
            </div>
            </>
    );
}

export default Result;