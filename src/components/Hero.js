import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className= {styles.cardList}>
            <div className= {styles.cardList.card}>
                <img src="./jupyter-main-logo.svg" className={styles.calloutImage}></img>
                <p>
                <b> Coding Education at your fingertips </b> <hr/><br/>
                Jupyter Notebooks and Coding repositories for individual projects, and more </p>
            </div>
            <div className={styles.cardList.card}>
                <img src="./kubernetes-logo.png" className={styles.calloutImage}></img>
                <p> <b> Based on Cloud Native Kubernetes Environment </b> <hr/><br/>
                Operatinal Efficiency through Kubernetes and Docker container</p>
            </div>
            <div className={styles.cardList.card}>
                <img src="./classroom-photo.jpg"  className={styles.calloutImage}></img>
                <p> <b> Class and Project Management for Educators </b> <hr/><br/>
                Quick and easy to manage members of classes</p>
            </div>
        </div>
    )
}

export default Hero;
