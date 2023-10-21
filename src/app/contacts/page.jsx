import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'
const Contacts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src = "/contact.png"
            alt = "contact-image"
            fill = {true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea
          className={styles.textArea}
          placeholder='Anything you wish to share'
          cols={30}
          rows={10}
          ></textarea>
          <Button url = "#" text = "Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Contacts