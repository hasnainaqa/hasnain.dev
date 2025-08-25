"use client"

import PageLayout from "./page-layout"
import ProjectsSection from "./projects-section"
import SectionHeading from "./section-heading"

export default function ProjectsPage() {
  return (
    <PageLayout withBgIcons={true}>
      <SectionHeading
        title="Featured Projects"
        accent="Projects"
        subtitle="A selection of my most significant professional work, demonstrating technical expertise and problem-solving capabilities across various domains."
        withBadge={true}
        badgeText="Portfolio"
      />
      <ProjectsSection />
    </PageLayout>
  )
}

