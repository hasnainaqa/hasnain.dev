"use client"

import { Box, Heading, Text, Button, Flex, useColorModeValue, HStack, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"

const MotionBox = motion(Box)

export default function ResumeHeader() {
  const headingColor = useColorModeValue("gray.800", "white")
  const subheadingColor = useColorModeValue("brand.600", "brand.300")
  const textColor = useColorModeValue("gray.600", "gray.300")
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.100", "gray.700")

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      mb={10}
      p={8}
      bg={bgColor}
      borderRadius="md"
      borderWidth="1px"
      borderColor={borderColor}
      shadow="sm"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={6}
      >
        <Box mb={{ base: 4, md: 0 }}>
          <Heading as="h1" size="xl" color={headingColor} mb={2}>
            Professional Resume
          </Heading>
          <Text color={subheadingColor} fontSize="lg" fontWeight="medium">
            Software Developer & Engineer
          </Text>
        </Box>

        <HStack spacing={4}>
          <Button leftIcon={<Icon as={FileText} />} colorScheme="brand" variant="outline" size="md">
            View PDF
          </Button>
          <Button leftIcon={<Icon as={Download} />} colorScheme="brand" size="md">
            Download
          </Button>
        </HStack>
      </Flex>

      <Text color={textColor} fontSize="md" lineHeight="tall">
        Experienced software developer with expertise in building enterprise-grade applications and scalable solutions.
        Proficient in modern web technologies and committed to delivering high-quality, maintainable code that solves
        complex business problems.
      </Text>
    </MotionBox>
  )
}

