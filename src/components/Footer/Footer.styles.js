import styled from "styled-components"

export const Wrapper = styled.footer`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 2%;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Submenu = styled.div`
  .col {
    flex: 1 0;
  }
  .footer-menu {
    display: inline-flex;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 10px;
      a {
        color: black;
        :hover {
          color: gray;
        }
      }
    }
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  .social-media {
    display: flex;
    justify-content: center;

    .social-icons {
      width: 25px;
      margin: 0 10px;
    }
  }
  .col {
    flex: 1 0;
  }
`

export const Contacto = styled.div`
  text-align: end;
  .col {
    flex: 1 0;
  }
`
