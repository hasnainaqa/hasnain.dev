"use client"

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Badge,
  Button,
  Stack,
  useColorModeValue,
  Container,
  HStack,
  Tag,
  VStack,
  LinkBox,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: string
}

const projects: ProjectProps[] = [
  {
    title: "Enterprise Resource Planning System",
    description:
      "A comprehensive ERP solution designed for medium to large businesses. Features include inventory management, human resources, accounting, and customer relationship management modules with real-time analytics and reporting.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    title: "Financial Analytics Dashboard",
    description:
      "An interactive dashboard for financial data visualization and analysis. Provides real-time market data, portfolio performance tracking, and predictive analytics with customizable reports and alerts.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "D3.js", "AWS", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
  },
  {
    title: "Secure Healthcare API Platform",
    description:
      "A HIPAA-compliant API platform for healthcare providers to securely exchange patient data. Implements advanced encryption, authentication, and audit logging with comprehensive documentation for third-party integrations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "Django", "MongoDB", "OAuth2", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Backend",
  },
]

function Project({ title, description, image, technologies, liveUrl, githubUrl, category }: ProjectProps) {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.100", "gray.700")
  const hoverBorderColor = useColorModeValue("brand.200", "brand.500")
  const titleColor = useColorModeValue("gray.800", "white")
  const textColor = useColorModeValue("gray.600", "gray.300")
  const tagBg = useColorModeValue("brand.50", "gray.700")
  const tagColor = useColorModeValue("brand.600", "brand.300")

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <LinkBox
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        bg={bgColor}
        borderColor={borderColor}
        transition="all 0.2s"
        _hover={{
          transform: "translateY(-4px)",
          shadow: "md",
          borderColor: hoverBorderColor,
        }}
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box position="relative" height="240px" width="100%">
          <Image src={image || "/placeholder.svg"} alt={title} fill style={{ objectFit: "cover" }} />
          <Badge
            position="absolute"
            top="4"
            right="4"
            colorScheme="brand"
            fontSize="xs"
            textTransform="uppercase"
            px="2"
            py="1"
            borderRadius="md"
          >
            {category}
          </Badge>
        </Box>

        <VStack p="6" align="start" spacing="4" flex="1">
          <Heading as="h3" fontSize="xl" fontWeight="bold" lineHeight="tight" color={titleColor}>
            {title}
          </Heading>

          <Text color={textColor} fontSize="sm" noOfLines={3}>
            {description}
          </Text>

          <Box mt="auto" pt="4" width="100%">
            <HStack flexWrap="wrap" spacing="2" mb="4">
              {technologies.map((tech) => (
                <Tag key={tech} size="sm" bg={tagBg} color={tagColor} mb="2">
                  {tech}
                </Tag>
              ))}
            </HStack>

            <Stack direction="row" spacing="4" width="100%" justifyContent="flex-end">
              <Button
                as={Link}
                href={githubUrl}
                size="sm"
                leftIcon={<Github size={16} />}
                variant="ghost"
                colorScheme="brand"
              >
                Code
              </Button>
              <Button as={Link} href={liveUrl} size="sm" leftIcon={<ExternalLink size={16} />} colorScheme="brand">
                Live Demo
              </Button>
            </Stack>
          </Box>
        </VStack>
      </LinkBox>
    </MotionBox>
  )
}

export default function ProjectsSection() {
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const headingColor = useColorModeValue("gray.800", "white")
  const accentColor = useColorModeValue("brand.600", "brand.300")
  const textColor = useColorModeValue("gray.600", "gray.300")

  return (
    <Box py="16" px={{ base: 4, md: 8 }} bg={bgColor}>
      <Container maxW="7xl">
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          direction="column"
          align="center"
          mb="12"
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="center"
            mb="4"
            color={headingColor}
          >
            Featured{" "}
            <Text as="span" color={accentColor}>
              Projects
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={textColor} textAlign="center" maxW="3xl">
            A selection of my most significant professional work, demonstrating technical expertise and problem-solving
            capabilities across various domains.
          </Text>
        </MotionFlex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </SimpleGrid>

        <Flex justify="center" mt="16">
          <Button size="md" colorScheme="brand" variant="outline" leftIcon={<Github size={18} />}>
            View More on GitHub
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

