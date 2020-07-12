import React from 'react'
import styles from './Main.module.css'
import imgBGMain from './images/main/main.png'
import imgCaptain from './images/main/captain.jpg'
import imgNyang from './images/main/nyang.jpg'

function Main()
{
    return (
        <div>
            <div className={styles.Main}>
                <img src={imgNyang} />                      
            </div>
        </div>
        
    );
}

export default Main;