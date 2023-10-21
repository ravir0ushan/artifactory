import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src = "https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt = "office image"
          className = {styles.img}
          fill = {true}

        />
        <div className={styles.imageText}>
          <h1 className={styles.imgTitle}>
            Digital Storytellers
          </h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.textTitle}>
            Who Are We?
          </h1>
          <p className={styles.textDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et blanditiis reiciendis provident odit voluptatum ab quis doloribus nesciunt odio! Quod, saepe? <br /> <br />Et nemo nam aliquam deserunt dolores aperiam perspiciatis incidunt officia ut repellendus, alias sit facilis amet at animi consectetur repellat ab. Quos iure, nam voluptatum sint totam deserunt temporibus.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.textTitle}>
            What We Do?
          </h1>
          <p className = {styles.textDesc}> 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo molestiae eaque, ducimus, quibusdam sunt quos laudantium optio minus repellat quidem ipsa beatae voluptatum! <br /> <br />Perspiciatis doloribus animi autem, distinctio quis earum minima maxime fuga nesciunt tenetur laboriosam labore sunt molestiae quae ut perferendis, quasi odio veritatis eligendi similique dolores aliquam ipsam.
          </p>
          <Button text = "Contacts" url = "/contacts"/>
        </div>
      </div>
    </div>
  )
}

export default About