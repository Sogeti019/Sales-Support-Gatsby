import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import heroStyles from '../components/hero.module.css'
import blogStyles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div style={{width: '50%', margin: 'auto'}} className={heroStyles.hero}>
          <div  style={{marginLeft: '4%', paddingTop: '20px'}} >
            <h1 className={blogStyles.topTitle}>{post.title}</h1>
            <p style={{fontSize: '12px', textTransform: 'uppercase', fontWeight: '400'}}>
              <a style={{fontSize: '12px', fontWeight: '400', marginRight: '20px'}}>Katie Joiner</a>
              <span style={{color: '#5b6770', fontWeight: '400'}}>{post.publishDate}</span>
            </p>
          </div>
          <Img style={{margin: '70px 0'}} className={heroStyles.heroImage} alt={post.title} sizes={post.heroImage.sizes} />
        </div>
        <div style={{width: '50%', margin: 'auto'}} className="wrapper">
          <p style={{display: 'block', color: '#004f71', fontSize: '12px', marginBottom: '20px'}}>FOOD</p>
          <h1 style={{marginBottom: '30px'}} className={blogStyles.topTitle}>{post.title + ' enjoy the party.'}</h1>
          <div style={{width: '80%',margin: 'auto', lineHeight: "36px"}}
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
