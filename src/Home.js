import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import styled from 'styled-components';
import imgBG from './images/home/home.png';

function Home()
{
    return (
        <>
        <div className={styles.Home}>
            <div className={styles.Main}>
                <img className={styles.imgBG} src={imgBG}/>

                <Link style={{ textDecoration: 'none', color: 'white'}} to='./main'>
                    <button className={styles.StartButton}>
                        <b>테스트 시작하기!</b>
                    </button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Home;