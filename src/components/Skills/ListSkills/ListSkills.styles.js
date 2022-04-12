import styled from "styled-components"

export const Container = styled.div`
  display: block;
  max-width: 100% !important;
  margin-bottom: 50px;
  padding: 40px 50px;
  text-align: center;

  .skillbar {
    width: 48%;
    display: inline-block;

    &:nth-child(2n) {
      margin-left: 20px;
      margin-right: 0;
    }
  }
`
