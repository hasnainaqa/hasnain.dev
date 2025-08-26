'use client'

import {
  Heading,
  Text,
  Flex,
  Divider,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)

interface SectionHeadingProps {
  title: string
  subtitle: string
  accent?: string
  withBadge?: boolean
  badgeText?: string
  align?: 'left' | 'center' | 'right'
  mb?: number | { base: number; md: number }
}

export default function SectionHeading({
  title,
  subtitle,
  accent,
  withBadge = false,
  badgeText = '',
  align = 'center',
  mb = { base: 8, md: 12 },
}: SectionHeadingProps) {
  const headingColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('brand.600', 'brand.300')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const dividerColor = useColorModeValue('gray.200', 'gray.700')
  const badgeBgColor = useColorModeValue('brand.50', 'gray.700')
  const badgeColor = useColorModeValue('brand.700', 'brand.200')

  return (
    <MotionFlex
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      direction="column"
      align={align}
      mb={mb}
      width="100%"
    >
      {withBadge && (
        <Badge
          px={3}
          py={1}
          mb={4}
          borderRadius="full"
          bg={badgeBgColor}
          color={badgeColor}
          fontWeight="medium"
          alignSelf={
            align === 'center'
              ? 'center'
              : align === 'left'
                ? 'flex-start'
                : 'flex-end'
          }
        >
          {badgeText || title}
        </Badge>
      )}

      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight="bold"
        textAlign={align}
        mb={4}
        color={headingColor}
        letterSpacing="tight"
      >
        {accent ? (
          <>
            {title.split(accent)[0]}
            <Text as="span" color={accentColor}>
              {accent}
            </Text>
            {title.split(accent)[1]}
          </>
        ) : (
          title
        )}
      </Heading>

      {subtitle && (
        <Text
          fontSize={{ base: 'md', lg: 'lg' }}
          color={textColor}
          textAlign={align}
          maxW={align === 'center' ? '2xl' : 'full'}
          mx={align === 'center' ? 'auto' : '0'}
          lineHeight="tall"
        >
          {subtitle}
        </Text>
      )}

      {align === 'left' && (
        <Divider
          mt={4}
          width="80px"
          borderColor={dividerColor}
          borderBottomWidth="3px"
        />
      )}
    </MotionFlex>
  )
}
