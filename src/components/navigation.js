import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'





export default () => {
  return (
    <nav role="navigation">
    <div className={[styles.headerComponents,styles.flex].join(' ')}>
      <Link className={styles.logo } to="/">
          <span>Chick-Fil-A</span>
      </Link>
      <ul className={styles.navList}>
        <li><a>Menu</a></li>
        <li><a>Stories</a></li>
        <li><a>About</a></li>
      </ul>

      <div className={styles.rightNavList}>
        <a style={{marginRight: '5px'}} >Chick-fil-A One </a>
        <span>(</span><a className={styles.signIn}> Sign In </a><span>)</span>
        <div style={{padding: "0 20px"}}>
          <a className={styles.orderButton}>Order Food</a>
        </div>
      </div>
    </div>
    <div className={styles.subNav}>
      <ul>
        <li><a>Food</a></li>
        <li><a>Lifestyle</a></li>
        <li><a>Inside Chick-fil-A</a></li>
        <li><a>News</a></li>
      </ul>
    </div>  
  </nav>
  );
}


