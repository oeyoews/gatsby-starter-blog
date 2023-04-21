import * as React from "react"
import { Link, graphql } from "gatsby"

import useSound from "use-sound"
import boopSfx from "../components/hover.mp3"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [play, { stop }] = useSound(boopSfx)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p className="prose">
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header className="prose prose-a:no-underline">
                    <h2>
                      <Link
                        to={post.fields.slug}
                        itemProp="url"
                        onMouseEnter={() => play()}
                        onMouseLeave={() => stop()}
                      >
                        <span
                          itemProp="headline"
                          className="rounded p-1 transition duration-200 hover:bg-gray-100"
                        >
                          {title}
                        </span>
                      </Link>
                    </h2>
                    {/*                     <small className="italic">{post.frontmatter.date}</small> */}
                  </header>
                  <section className="ml-2">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </Layout>
    </>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="oeyoews" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
