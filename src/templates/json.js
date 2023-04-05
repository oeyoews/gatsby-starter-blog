import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const JsonTemplate = ({ data: { DataJson: post }, location }) => {
  const siteTitle = `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" class="text-black">
            {post.title}
          </h1>
          <p class="italic">{post.created}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.text }} />
      </article>
    </Layout>
  )
}

export const Head = ({ data: { DataJson: post } }) => {
  return (
    <Seo
      title={post.title}
      description={post.text.substring(0, 160) || post.text}
    />
  )
}

export default JsonTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    DataJson(id: { eq: $id }) {
      id
      title
      created
      text
    }
  }
`
