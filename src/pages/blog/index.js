import * as React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../../components/layout"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "../index.module.css"

export const query = graphql`
  query MyQuery {
    allWpPost {
      nodes {
        title
        excerpt
        gatsbyPath(filePath: "/blog/{WpPost.slug}")
      }
    }
  }
`
export default function BlogIndexPage({ data }) {
  return (
    <Layout>
      <div className={container}>
        <h1>Blog posts</h1>
        {data.allWpPost.nodes.map((post) => {
          return (
            <div style={{ marginBottom: 32 }}>
              <h2 className={intro}>
                <Link to={post.gatsbyPath}>{post.title}</Link>
              </h2>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
