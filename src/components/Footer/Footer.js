import React from "react"
import { Link } from "gatsby"
import Facebook from "../../images/icons/facebook-square-brands.svg"
import Instagram from "../../images/icons/instagram.svg"
import Messenger from "../../images/icons/facebook-messenger-brands.svg"
import Whats from "../../images/icons/whatsapp-brands.svg"

//styles
import { Wrapper, Row, Submenu, Social, Contacto } from "./Footer.styles"

const Footer = () => {
  return (
    <>
      <Wrapper className="footer">
        <Row>
          <Submenu className="col">
            <ul className="footer-menu">
              <li>
                <Link to="/skills">¿Quien Soy?</Link>
              </li>
              <li>
                <a href="https://wa.link/rg1heh">¿Cómo puedo ayudarte?</a>
              </li>
            </ul>
          </Submenu>
          <Social className="col social-media">
            <div className="social-media">
              <a href="https://www.facebook.com/alexisvecodesing">
                <img
                  className="social-icons"
                  src={Facebook}
                  alt="facebook-logo"
                />
              </a>
              <a href="http://m.me/alexisvecodesing">
                <img
                  className="social-icons"
                  src={Messenger}
                  alt="messenger-logo"
                />
              </a>
              <a href="https://www.instagram.com/alexisveco.21/">
                <img
                  className="social-icons"
                  src={Instagram}
                  alt="instagram-logo"
                />
              </a>
              <a href="https://wa.link/rg1heh">
                <img className="social-icons" src={Whats} alt="whatsapp-logo" />
              </a>
            </div>
          </Social>
          <Contacto className="col">
            <span>Email: LAVC.soporte@gmail.com </span>
            <br></br> <span>Diseño por Disturbio Ilustrativo</span>
          </Contacto>
        </Row>
        <span>©</span>
        <span>
          2021 ALEXIS VELÁZQUEZ PORTFOLIO <br></br> All Right Reserved.
        </span>
      </Wrapper>
    </>
  )
}

export default Footer
