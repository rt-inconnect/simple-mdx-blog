import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Post, FeatureImage } from "../components"

const singlePost = ({ data }) => {
  const { date, excerpt, slug, title, featureImage } = data.mdx.frontmatter

  return (
    <Container>
      <FeatureImage fixed={featureImage.childImageSharp.fixed} />
      <Post>
        <H1 margin="0 0 2rem 0">{title}</H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
