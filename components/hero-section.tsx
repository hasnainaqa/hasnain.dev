'use client'

import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionBox = motion(Box)

export default function HeroSection() {
  const headingColor = useColorModeValue('gray.900', 'white')
  const subheadingColor = useColorModeValue('brand.600', 'brand.300')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      minH="70vh"
      px={{ base: 4, md: 8 }}
      mb={16}
      gap={{ base: 8, md: 4 }}
      bg={bgColor}
    >
      <Stack
        spacing={6}
        w={{ base: '100%', md: '50%' }}
        align={{ base: 'center', md: 'flex-start' }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color={headingColor}
            textAlign={{ base: 'center', md: 'left' }}
            lineHeight="shorter"
          >
            <Text as="span">Hasnain</Text>
            <br />
            <Text
              as="span"
              color={subheadingColor}
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            >
              Professional Web Developer
            </Text>
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={textColor}
            textAlign={{ base: 'center', md: 'left' }}
            maxW="lg"
            lineHeight="tall"
          >
            Specialized in developing applications with modern technologies.
            Delivering clean, efficient, and scalable solutions for businesses
            across various industries.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            align="center"
          >
            <Link href = "/cv-preview"  target="_blank" >
            <Button size="md" fontWeight="medium" px={6} colorScheme="brand">
              View Portfolio
            </Button>
          </Link>
            <a href="/resume.pdf" download>
              <Button
                size="md"
                fontWeight="medium"
                px={6}
                colorScheme="brand"
                variant="outline"
              >
                Download Resume
              </Button>
            </a>
          </Stack>
        </MotionBox>
      </Stack>

      <MotionBox
        w={{ base: '100%', md: '40%' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/profilqPhoto.jpeg"
          alt="Professional headshot"
          borderRadius="xl"
          shadow="md"
          objectFit="cover"
          mx="auto"
          height={250}
        />
      </MotionBox>
    </Flex>
  )
}
