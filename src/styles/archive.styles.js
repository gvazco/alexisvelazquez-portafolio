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
  width: 100%;
  position: relative;
  overflow: hidden;
  object-fit: cover;
  border-radius: 9px;

  @media (min-width: 768px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 20px 0px;

  @media (max-width: 992px) {
    padding: 20px;
  }
`
export const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`
export const PageContent = styled.article`
  margin: 20px 0 20px 0;
  width: 100%;
  h1 {
    line-height: 80px;
    font-family: "Gobold", sans-serif;
    text-align: left;
    letter-spacing: 10px;
    font-size: 2.5em;
    text-align: right;
    @media (min-width: 992px) {
      font-size: 5em;
      letter-spacing: 20px;
    }
  }

  .productos-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 18px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 0 15px;

    @media screen and (min-width: 450px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .entry-content {
    opacity: 0.8;
    transition: 0.3s all ease-in-out;
    margin-bottom: 30px;
    content: "";
    background: linear-gradient(90deg, #0a0a0a, #1c1c1c);
    box-shadow: 11px 11px 8px #040303, -11px -11px 8px #0e0b0b;
    z-index: -1;
    border-radius: 9px;

    p {
      padding: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 25px;
      max-height: 100px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      font-size: 16px;
    }

    :hover {
      opacity: 1;
      background: linear-gradient(90deg, #1c1c1c, #0a0a0a);
      box-shadow: 11px 11px 8px #040303, -11px -11px 8px #0e0b0b;
    }
  }
`
export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 20px;
  color: #fff;
`
export const StyledDate = styled.div`
  font-family: "Chub Gotic", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 20px;
`
export const StyledReadMore = styled(Link)`
  font-family: "Chub Gotic", sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #000;
  position: relative;
  width: 120px;
  height: 35px;
  display: block;
  background: #fff;
  padding: 3px 0 0 10px;
  left: 20px;
  bottom: 20px;

  :hover {
    background: #000;
    color: #fff;
  }
`
