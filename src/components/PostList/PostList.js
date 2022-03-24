import React from "react"
import { Link } from "gatsby"
import { map } from "lodash"
import moment from "moment"
import "moment/locale/es"
import {
  Masonry,
  MasonryItem,
  MasonryWrapper,
  Image,
  StyledImg,
} from "./PostList.styles"

export default function PostList(props) {
  const { posts } = props

  console.log(posts)

  return (
    <MasonryWrapper>
      <Masonry>
        {map(posts, post => (
          <MasonryItem>
            <Link to={`/${post.slug}`}>
              <Image>
                <StyledImg
                  image={
                    post.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Blog Image"
                />
              </Image>
            </Link>
          </MasonryItem>
        ))}
      </Masonry>
    </MasonryWrapper>
  )
}
