import React from 'react'
import styles from './Result.module.css'
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

function GetImageChar(props)
{
    // type 0 : 자아존중감, 1 : 스트레스 표출, 2 : 대인관계 스트레스, 3 : 의무
    const v_3 = parseInt(props / 1000);
    const v_2 = parseInt((props % 1000) / 100);
    const v_1 = parseInt((props % 100) / 10);
    const v_0 = parseInt(props % 10);
    
    const code = v_3.toString() + v_2.toString() + v_0.toString() + v_1.toString();

    console.log(code);

    switch (code)
    {
        case '0000':
            return (
                <img className={styles.imgBG} src={C_1} alt='character'/>
            );
        case '0001':
            return (
                <img className={styles.imgBG} src={C_2} alt='character'/>
            );
        case '0010':
            return (
                <img className={styles.imgBG} src={C_3} alt='character'/>
            );
        case '0011':
            return (
                <img className={styles.imgBG} src={C_4} alt='character'/>
            );
        case '0100':
            return (
                <img className={styles.imgBG} src={C_5} alt='character'/>
            );
        case '0101':
            return (
                <img className={styles.imgBG} src={C_6} alt='character'/>
            );
        case '0110':
            return (
                <img className={styles.imgBG} src={C_7} alt='character'/>
            );
        case '0111':
            return (
                <img className={styles.imgBG} src={C_8} alt='character'/>
            );
        case '1000':
            return (
                <img className={styles.imgBG} src={C_9} alt='character'/>
            );
        case '1001':
            return (
                <img className={styles.imgBG} src={C_10} alt='character'/>
            );
        case '1010':
            return (
                <img className={styles.imgBG} src={C_11} alt='character'/>
            );
        case '1011':
            return (
                <img className={styles.imgBG} src={C_12} alt='character'/>
            );
        case '1100':
            return (
                <img className={styles.imgBG} src={C_13} alt='character'/>
            );
        case '1101':
            return (
                <img className={styles.imgBG} src={C_14} alt='character'/>
            );
        case '1110':
            return (
                <img className={styles.imgBG} src={C_15} alt='character'/>
            );
        case '1111':
            return (
                <img className={styles.imgBG} src={C_16} alt='character'/>
            );
        default:
            return (
                <img className={styles.imgBG} src={C_1} alt='character'/>
            );
    }
}

function Result( {match})
{
    return (
        <>
            <div className={styles.Result}>
                <div className={styles.ResultContext}>

                    {/* 배경 */}
                    <img className={styles.imgBG} src={imgBGResult} alt='resultBG'/>
                    {/* 이미지캐릭터 */}
                    {GetImageChar(match.params.code)}

                    {/* 공유기능 */}
                    <div className={styles.Instagram}>
                        
                    </div>
                    <div className={styles.Facebook}>
                        
                    </div>
                    <div className={styles.KaKaoTalk}>
                        
                    </div>
                    <div className={styles.Twitter}>
                        
                    </div>
                    <div className={styles.Line}>
                        
                    </div>
                </div>
            </div>
            </>
    );
}

export default Result;