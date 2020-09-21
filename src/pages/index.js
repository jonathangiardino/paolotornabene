import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MissionSection from "../components/missionSection"
import ProjectsGallery from "../components/projectsGallery"
import AboutSection from "../components/aboutSection"
import ClientsSection from "../components/clientsSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <MissionSection />
      <ProjectsGallery />
      <AboutSection />
      <ClientsSection />
    </Layout>
  )
}

export default IndexPage
