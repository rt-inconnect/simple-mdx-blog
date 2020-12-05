import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

export const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="15.01.2020"
          title="Test title"
          excerpt="Test excerpt"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
