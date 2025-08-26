'use client'

import PageLayout from './page-layout'
import ContactSection from './contact-section'
import SectionHeading from './section-heading'

export default function ContactPage() {
  return (
    <PageLayout withBgIcons={true}>
      <SectionHeading
        title="Let's Start a Conversation"
        accent="Conversation"
        subtitle="I'm always interested in new opportunities, collaborations, and innovative projects. Feel free to reach out through any of the channels below."
        withBadge={true}
        badgeText="Get In Touch"
      />
      <ContactSection />
    </PageLayout>
  )
}
