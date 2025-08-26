'use client'

import type { ReactNode } from 'react'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Header from './header'
import BackgroundIcons from './background-icons'

interface PageLayoutProps {
  children: ReactNode
  withBgIcons?: boolean
  maxWidth?: string
  py?: number | { base: number; md?: number; lg?: number }
  px?: number | { base: number; md?: number; lg?: number }
  bgColor?: string
}

export default function PageLayout({
  children,
  withBgIcons = true,
  maxWidth = '7xl',
  py = { base: 12, md: 16, lg: 20 },
  px = { base: 4, md: 8 },
  bgColor,
}: PageLayoutProps) {
  const defaultBgColor = useColorModeValue('gray.50', 'gray.900')
  const bg = bgColor || defaultBgColor

  return (
    <Box>
      <Header />
      <Box
        as="main"
        position="relative"
        bg={bg}
        minH="calc(100vh - 70px)"
        py={py}
        px={px}
        overflow="hidden"
      >
        {withBgIcons && <BackgroundIcons />}
        <Container maxW={maxWidth} position="relative" zIndex={1}>
          {children}
        </Container>
      </Box>
    </Box>
  )
}
