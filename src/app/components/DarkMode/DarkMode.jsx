'use client'
import React, { useContext } from 'react'
import styles from './DarkMode.module.css'
import { ThemeContext } from '../../../context/ThemeContext'

const DarkMode = () => {
    const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>☀️</div>
        <div className={styles.ball} 
         style={mode === "light" ? {left: "3px"}: {right : "3px"}}
        />
    </div>
  )
}

export default DarkMode