import React from 'react';
import styles from './Home.module.css';
import imgBG from './images/home/home.jpg';

function Home( {history})
{
    const onClick = () => {
        let address = '/main';
        history.push(address);
    }

    return (
        <>
        <div className={styles.Home}>
            <div className={styles.Main}>
                <img className={styles.imgBG} src={imgBG} alt='homeBG'/>

                    <button onClick={onClick} className={styles.StartButton}>
                        <b>테스트 시작하기!</b>
                    </button>
            </div>
        </div>
        </>
    );
}

export default Home;