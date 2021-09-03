import React from 'react'
import Toolbar from '../components/toolbar'
import styles from '../styles/About.module.css'

function About() {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>This is a practice project</h1>
            </div>
        </div>
    )
}

export default About;
