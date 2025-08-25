"use client"

import PageLayout from "./page-layout"
import ResumeHeader from "./resume-header"
import EducationSection from "./education-section"
import SkillsCluster from "./skills-cluster"
import SectionHeading from "./section-heading"

export default function ResumePage() {
  return (
    <PageLayout withBgIcons={true}>
      <SectionHeading
        title="Professional Resume"
        accent="Resume"
        subtitle="Experienced software developer with expertise in building enterprise-grade applications and scalable solutions. Proficient in modern web technologies and committed to delivering high-quality, maintainable code."
        withBadge={true}
        badgeText="Resume"
      />
      <ResumeHeader />
      <EducationSection />
      <SkillsCluster />
    </PageLayout>
  )
}

