import React from "react"

import profileImage from "../../images/avatar.jpeg"

import Seo from "../seo"

import { Wrapper, Container, Row, Col, Image } from "./Profile.styles"

const data = [
  {
    title: "Edad:",
    info: "28 años",
  },
  {
    title: "Dirección:",
    info: "Ricardo Flores Magón 73, Izcalli Chamapa, Naucalpan, EdoMéx.",
  },
  {
    title: "E-Mail:",
    info: "LAVC.soporte@gmail.com",
  },
  {
    title: "Telefono:",
    info: "55 6371-9043",
  },
]

export default function Profile() {
  return (
    <Wrapper className="profile">
      <Seo
        title="CV de Alexis Velázquez"
        description="Habilidades y Cualidades Profesionales."
        image={profileImage}
      />
      <Container className="box">
        <Row className="info">
          <div className="image">
            <img src={profileImage} />
          </div>

          <div className="infodata">
            <p>Alexis Velázquez</p>
            <p>Diseñador Gráfico</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </Wrapper>
  )
}
