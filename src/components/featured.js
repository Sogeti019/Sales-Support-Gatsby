import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
        <p className="tag">
            <span class="featured">Featured </span>
            <Link to={`/blog/${data.slug}`}>{data.tags[0]}</Link>
            {/* <a href="#">{data.tags[0]}</a> */}
        </p>
  )