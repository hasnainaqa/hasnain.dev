"use client"
import PageLayout from "./page-layout"
import HeroSection from "./hero-section"
import SkillsSection from "./skills-section"

export default function HomePage() {
  return (
    <PageLayout withBgIcons={true}>
      <HeroSection />
      <SkillsSection />
    </PageLayout>
  )
}

