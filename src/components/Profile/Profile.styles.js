import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const Image = styled(GatsbyImage)`
  width: 100% !important;
  img {
    transition: all 0.3s !important;
  }
`

export const Wrapper = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;
  z-index: 0;
`

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 75%);
  -webkit-box-shadow: 0 0 10px 0 rgb(0 0 0 / 75%);
  -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.75);
  padding: 0;
  position: relative;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;

  .image {
    img {
      height: auto;
      max-width: 100%;
      vertical-align: middle;
      padding: 20px;
    }
    @media (min-width: 768px) {
      flex: 0 0 auto;
      height: auto;
      width: 33.33333333%;
    }
  }
  .infodata {
    padding: 0 20px;
    > span {
      background-color: #0098d3;
      font-weight: bold;
      color: #fff;
      padding: 5px 10px;
      border-radius: 4px;
    }

    > p:first-of-type {
      margin: 10px 0 0 0;
      font-weight: 400;
      font-size: 40px;
      color: #000;
    }

    .more-info {
      .item {
        display: flex;
        flex-wrap: wrap;
        p {
          &:first-of-type {
            width: 50%;
            font-weight: 400;
            text-transform: uppercase;
            color: #000;
          }
          &:last-of-type {
            width: 50%;
            color: #a2a2a2;
          }
        }

        @media (max-width: 450px) {
          display: block;
          p {
            &:first-of-type {
              width: 50%;
            }
            &:last-of-type {
              width: 90%;
            }
          }
        }
      }
    }

    @media (min-width: 768px) {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
  }
`
