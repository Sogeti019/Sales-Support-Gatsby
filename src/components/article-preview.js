import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <div >
    <Link to={`/blog/${article.slug}`}>
      <Img style={{maxHeight: '200px'}} alt="" sizes={article.heroImage.sizes} />
    </Link>
    </div>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    <p className={styles.tag}>
      <span className={styles.featured}>Featured </span>
      <a>Food</a>
    </p>
  </div>
)
