import React from "react"

import loadable from "@loadable/component"
import { Container } from "./ListSkills.styles"

const SkillBar = loadable(() => import("react-skills-bars"))

export default function ListSkills(props) {
  const { skills, colors } = props

  return (
    <Container className="list-skills">
      <SkillBar
        skills={skills}
        colors={colors}
        animationDelay={0}
        animationDuration={100}
      />
    </Container>
  )
}
