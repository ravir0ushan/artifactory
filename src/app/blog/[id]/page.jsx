import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , { cache: 'no-store' })
  
  if (!res.ok) {
     return notFound()
  }
 
  return res.json()
} 

const BlogPosts = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias asperiores quos vel magnam, ex quae, tempore tenetur culpa magni facilis sit labore nesciunt ab voluptas, illo laborum sequi. Ratione, a officia fuga quaerat deleniti dolor veniam ut quasi aliquam?
          </p>
        
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/5045907/pexels-photo-5045907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={styles.avatar}
            width={40}
            height={40}
            alt='avatar'
          />
          <span className={styles.username}>John Doe</span>
        </div>
        </div>
     
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/5045907/pexels-photo-5045907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           
          alt='blogpost image'
          fill = {true}
          className={styles.image}
        />
      </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi nam culpa ut quaerat distinctio porro nesciunt tempore adipisci, explicabo aperiam quidem repudiandae neque! Eius, harum optio quos dolores perferendis vel ratione esse iusto sunt aperiam impedit, exercitationem ipsum magnam consequatur voluptatem? Minus ullam aspernatur deserunt ut enim obcaecati amet illum quasi maiores reprehenderit beatae distinctio velit aliquam dicta dolore, sed molestiae inventore maxime ab atque ratione doloribus mollitia eum tempora. Illo, culpa adipisci. Pariatur illum blanditiis numquam maxime est saepe ducimus et qui ipsa amet voluptatem consequatur obcaecati enim esse excepturi temporibus molestias, aspernatur tenetur? Dolores qui aut delectus voluptatibus velit, in sint dolor quasi recusandae obcaecati facere officiis blanditiis, consectetur molestiae dignissimos mollitia maxime nulla voluptate quidem aliquid repudiandae illum nihil eius! Libero velit ducimus rem impedit autem voluptate vel a voluptatum error officiis soluta temporibus quaerat, cupiditate, tenetur eaque atque amet eos officia sint obcaecati! Nesciunt expedita ex molestiae quos et, optio alias porro error culpa fuga, ea omnis, deleniti magnam sed ipsa. Facere quo corporis commodi, rem asperiores esse nemo tenetur itaque blanditiis earum a aperiam dignissimos totam, aliquid modi illum odio nostrum voluptate consequuntur voluptatibus unde eveniet deleniti. Suscipit veniam rem, quas dolor atque repellat.
        </p>
      </div>
    </div>
  )
}

export default BlogPosts