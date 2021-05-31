import * as React from "react"
import { Layout } from "../../components/layout"
import { graphql } from "gatsby"
import { container, intro } from "../index.module.css"

export default function BlogPostTemplate(props) {
  return (
    <Layout>
      <div className={container}>
        <h1 className={intro}>{props.data.wpPost.title}</h1>
        {props.data.wpPost.terms.nodes.map((term) => (
          <div>term: {term.name}</div>
        ))}
        <div dangerouslySetInnerHTML={{ __html: props.data.wpPost.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      terms {
        nodes {
          name
        }
      }
      content
    }
  }
`
