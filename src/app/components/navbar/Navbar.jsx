"use client"
import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import DarkMode from '../DarkMode/DarkMode';
const Links = [
  {
    id : 1,
    title : "Home",
    url : "/",
  },
  {
    id : 6,
    title : "Dashboard",
    url : "/dashboard",
  },
  {
    id : 5,
    title : "Contacts",
    url : "/contacts",
  },
  {
    id : 2,
    title : "Portfolio",
    url : "/portfolio",
  },
  {
    id : 4,
    title : "About",
    url : "/about",
  },
  {
    id : 3,
    title : "Blog",
    url : "/blog",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Artifactory</Link>
      
      <div className={styles.links}>
        <DarkMode/>
        {Links.map(link=>(
          <Link key = {link.id} href = {link.url}>{link.title}</Link>
        ))}
        <button className={styles.logout} onClick={()=>{console.log("logged out")}}>Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar