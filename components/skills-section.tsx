'use client'

import type React from 'react'

import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Globe,
  Layout,
  Smartphone,
  Terminal,
} from 'lucide-react'

const MotionBox = motion(Box)

interface FeatureProps {
  title: string
  text: string
  icon: React.ReactElement
}

function Feature({ title, text, icon }: FeatureProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const hoverBorderColor = useColorModeValue('brand.200', 'brand.500')
  const iconBgColor = useColorModeValue('brand.50', 'gray.700')
  const iconColor = useColorModeValue('brand.600', 'brand.300')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const titleColor = useColorModeValue('gray.800', 'white')

  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Stack
        align="flex-start"
        justify="flex-start"
        rounded="md"
        p={6}
        bg={bgColor}
        shadow="sm"
        borderWidth="1px"
        borderColor={borderColor}
        h="100%"
        transition="all 0.2s"
        _hover={{
          shadow: 'md',
          borderColor: hoverBorderColor,
        }}
      >
        <Flex
          w={12}
          h={12}
          align="center"
          justify="center"
          rounded="md"
          bg={iconBgColor}
          color={iconColor}
          mb={4}
        >
          {icon}
        </Flex>
        <Text fontWeight={600} fontSize="lg" mb={1} color={titleColor}>
          {title}
        </Text>
        <Text color={textColor} fontSize="sm">
          {text}
        </Text>
      </Stack>
    </MotionBox>
  )
}

export default function SkillsSection() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const headingColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('brand.600', 'brand.300')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box py={16} px={{ base: 4, md: 8 }} bg={bgColor}>
      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        mb={12}
        textAlign="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          mb={3}
          color={headingColor}
        >
          Professional{' '}
          <Text as="span" color={accentColor}>
            Expertise
          </Text>
        </Heading>
        <Text
          fontSize={{ base: 'md', lg: 'lg' }}
          color={textColor}
          maxW="2xl"
          mx="auto"
        >
          Leveraging industry-standard technologies to deliver robust and
          scalable solutions
        </Text>
      </MotionBox>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        mx="auto"
        maxW="7xl"
      >
        <Feature
          icon={<Icon as={Layout} w={6} h={6} />}
          title="Frontend Architecture"
          text="React, Next.js, TypeScript, Redux, Design Systems, Performance Optimization"
        />
        <Feature
          icon={<Icon as={Terminal} w={6} h={6} />}
          title="Backend Development"
          text="Node.js, Express, Python, RESTful API Design"
        />
        <Feature
          icon={<Icon as={Database} w={6} h={6} />}
          title="Database Solutions"
          text="SQL (MySQL), NoSQL (MongoDB), Query Optimization"
        />
        <Feature
          icon={<Icon as={Code} w={6} h={6} />}
          title="Software Engineering"
          text="Clean Code, Design Patterns, Microservices, CI/CD, Test-Driven Development"
        />
        {/* <Feature
          icon={<Icon as={Globe} w={6} h={6} />}
          title="Cloud Services"
          text="AWS, Azure, Google Cloud, Serverless Architecture, Infrastructure as Code"
        /> */}
        <Feature
          icon={<Icon as={Smartphone} w={6} h={6} />}
          title="Enterprise Solutions"
          text="System Integration, Legacy Modernization, Enterprise Architecture"
        />
      </SimpleGrid>
    </Box>
  )
}
