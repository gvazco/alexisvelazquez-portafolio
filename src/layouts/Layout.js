import React, { useState } from "react"
import Header from "../components/Header/"
import OverlayMenu from "../components/OverlayMenu/"
import Hamburger from "../components/Hamburguer"
import Footer from "../components/Footer/"
import { GlobalStyles, Primary } from "./Layout.styles"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout
