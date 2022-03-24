import React from "react"
import PropType from "prop-types"
import { Link } from "gatsby"

import { Pag } from "./Pagination.styles"

export default function Pagination(props) {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext
  console.log(pageContext)

  return (
    <Pag>
      {previousPagePath && <Link to={previousPagePath}>Atras</Link>}
      {nextPagePath && <Link to={nextPagePath}>Siguiente</Link>}
    </Pag>
  )
}

Pagination.prototype = {
  pageContext: PropType.object.isRequired,
}
