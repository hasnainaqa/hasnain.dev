"use client"

import type React from "react"

import { Box, Heading, Text, Flex, useColorModeValue, VStack, Circle, Divider, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { GraduationCap, School, BookOpen } from "lucide-react"

const MotionBox = motion(Box)

interface EducationItemProps {
  institution: string
  degree: string
  location: string
  period: string
  icon: React.ReactElement
  isLast?: boolean
}

function EducationItem({ institution, degree, location, period, icon, isLast = false }: EducationItemProps) {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.100", "gray.700")
  const titleColor = useColorModeValue("gray.800", "white")
  const subtitleColor = useColorModeValue("brand.600", "brand.300")
  const textColor = useColorModeValue("gray.600", "gray.300")
  const timelineColor = useColorModeValue("gray.200", "gray.600")
  const circleColor = useColorModeValue("brand.500", "brand.400")
  const circleBgColor = useColorModeValue("white", "gray.800")

  return (
    <Flex>
      {/* Timeline */}
      <Flex direction="column" alignItems="center" mr={6}>
        <Circle size="40px" bg={circleBgColor} borderWidth="2px" borderColor={circleColor} color={circleColor}>
          {icon}
        </Circle>
        {!isLast && <Box height="100%" width="2px" bg={timelineColor} my={2} />}
      </Flex>

      {/* Content */}
      <MotionBox
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        mb={isLast ? 0 : 8}
        flex={1}
      >
        <Box
          p={6}
          bg={bgColor}
          borderRadius="md"
          borderWidth="1px"
          borderColor={borderColor}
          shadow="sm"
          transition="all 0.2s"
          _hover={{
            shadow: "md",
            borderColor: "brand.200",
            transform: "translateY(-2px)",
          }}
        >
          <Text color={subtitleColor} fontSize="sm" fontWeight="medium" mb={1}>
            {period}
          </Text>
          <Heading as="h3" size="md" color={titleColor} mb={2}>
            {institution}
          </Heading>
          <Text color={titleColor} fontWeight="medium" mb={1}>
            {degree}
          </Text>
          <Text color={textColor}>{location}</Text>
        </Box>
      </MotionBox>
    </Flex>
  )
}

export default function EducationSection() {
  const headingColor = useColorModeValue("gray.800", "white")
  const accentColor = useColorModeValue("brand.600", "brand.300")
  const dividerColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Box mb={16}>
      <Flex align="center" mb={8}>
        <Heading as="h2" size="lg" color={headingColor}>
          <Text as="span" color={accentColor}>
            Education
          </Text>
        </Heading>
        <Divider ml={4} borderColor={dividerColor} />
      </Flex>

      <VStack spacing={0} align="stretch">
        <EducationItem
          institution="University of Gujrat"
          degree="Bachelors in Computer Science (BSCS)"
          location="Gujrat, Punjab, Pakistan"
          period="2021 - 2025"
          icon={<Icon as={GraduationCap} />}
        />

        <EducationItem
          institution="Superior College"
          degree="Intermediate (ICS Physics)"
          location="Gujranwala, Punjab, Pakistan"
          period="2019 -  2021"
          icon={<Icon as={School} />}
        />

        <EducationItem
          institution="The Educator (Al Kalem Campus)"
          degree="Matriculation (Science)"
          location="Gujranwala, Punjab, Pakistan"
          period=" 2017 -  2019"
          icon={<Icon as={BookOpen} />}
          isLast
        />
      </VStack>
    </Box>
  )
}

