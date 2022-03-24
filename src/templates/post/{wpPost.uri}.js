import React from "react"
import Layout from "../../layouts/Layout"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import styled from "styled-components"
import Seo from "../../components/seo"

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`

const PostContent = styled.article`
  margin-top: 20px;
  max-width: 100%;

  h1 {
    font-family: "Gobold", sans-serif;
    line-height: 60px;
    font-weight: 100;
    letter-spacing: 4.5px;
    text-align: center;
  }

  a {
    color: #fff;
  }

  a:hover {
    color: #60c1aa;
  }

  iframe {
    width: 100%;
  }

  blockquote {
    font-size: 1rem !important ;
    text-align: right;
    border-left: 2px solid #fff;
    font-family: "Times New Roman", Times, serif;
    p {
      text-align: right;
      font-family: "Times New Roman", Times, serif;
    }
    cite {
      text-align: right;
    }
  }

  figcaption {
    text-align: center;
  }
  p {
    text-align: justify;
    text-justify: auto;
    letter-spacing: 1px;

    @media (min-width: 450px) {
      text-align: justify;
      text-justify: auto;
    }
  }

  img {
    width: 100% !important;
    border: solid 5px #ffffff;
  }
`

export default function post(props) {
  const { pageContext } = props
  const { data: post } = pageContext

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.title}
        image={post.featuredImage.node.localFile.publicURL}
      />

      <Wrapper className="wrapper">
        <ContentWrapper>
          <PostContent>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div
              dangerouslySetInnerHTML={{
                __html: TransformOembedToIframe(post.content),
              }}
            />
          </PostContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}
