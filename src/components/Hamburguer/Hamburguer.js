import React from "react"
import { HamburgerButton } from "./Hamburguer.styles"
import HamburgerIcon from "../../images/icons/menu-icon-2.svg"

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu}>
    <img src={HamburgerIcon} alt="menu-hamburger" />
  </HamburgerButton>
)

export default Hamburger
