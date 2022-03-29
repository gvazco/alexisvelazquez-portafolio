import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  width: 100% !important;
  img {
    transition: all 0.3s !important;
  }
`
export const Image = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

export const MasonryWrapper = styled.div`
  padding: 1.5em;
  margin-right: auto;
  margin-left: auto;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
`

export const Masonry = styled.div`
  columns: 3;
  column-gap: 20px;

  @media (max-width: 992px) {
    columns: 2;
    column-gap: 20px;
  }
  @media (max-width: 576px) {
    columns: 1;
    column-gap: 20px;
  }
`

export const MasonryItem = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  width: 100%;
  box-shadow: 2px 2px 5px #999 !important;

  &:hover {
    filter: brightness(110%);
  }
`
