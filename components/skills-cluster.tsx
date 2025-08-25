"use client"

import type React from "react"

import { Box, Heading, Text, Flex, useColorModeValue, SimpleGrid, Divider, Tooltip } from "@chakra-ui/react"
import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
  SiFirebase,
  SiKubernetes,
  SiGooglecloud,
  SiAzuredevops,
  SiJest,
  SiCypress,
} from "react-icons/si"

const MotionBox = motion(Box)

interface SkillCategoryProps {
  title: string
  skills: {
    name: string
    icon: React.ReactElement
    color: string
  }[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.100", "gray.700")
  const titleColor = useColorModeValue("gray.800", "white")
  const textColor = useColorModeValue("gray.600", "gray.300")
  const skillBgColor = useColorModeValue("gray.50", "gray.700")

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box p={6} bg={bgColor} borderRadius="md" borderWidth="1px" borderColor={borderColor} shadow="sm" height="100%">
        <Heading as="h3" size="md" mb={4} color={titleColor}>
          {title}
        </Heading>

        <Flex flexWrap="wrap" gap={4}>
          {skills.map((skill) => (
            <Tooltip key={skill.name} label={skill.name} placement="top">
              <Flex
                direction="column"
                align="center"
                justify="center"
                p={3}
                borderRadius="md"
                bg={skillBgColor}
                color={skill.color}
                transition="all 0.2s"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "md",
                }}
                cursor="pointer"
              >
                <Box fontSize="2xl" mb={2}>
                  {skill.icon}
                </Box>
                <Text fontSize="xs" fontWeight="medium" color={textColor}>
                  {skill.name}
                </Text>
              </Flex>
            </Tooltip>
          ))}
        </Flex>
      </Box>
    </MotionBox>
  )
}

export default function SkillsCluster() {
  const headingColor = useColorModeValue("gray.800", "white")
  const accentColor = useColorModeValue("brand.600", "brand.300")
  const dividerColor = useColorModeValue("gray.200", "gray.700")
  const nextJsColor = useColorModeValue("#000000", "#FFFFFF")
  const expressColor = useColorModeValue("#000000", "#FFFFFF")
  const githubColor = useColorModeValue("#181717", "#FFFFFF")

  const frontendSkills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: nextJsColor },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: expressColor },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ]

  const devOpsSkills = [
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
    { name: "Azure DevOps", icon: <SiAzuredevops />, color: "#0078D7" },
    { name: "GitHub", icon: <FaGithub />, color: githubColor },
    { name: "Jest", icon: <SiJest />, color: "#C21325" },
    { name: "Cypress", icon: <SiCypress />, color: "#17202C" },
  ]

  return (
    <Box>
      <Flex align="center" mb={8}>
        <Heading as="h2" size="lg" color={headingColor}>
          <Text as="span" color={accentColor}>
            Technical Skills
          </Text>
        </Heading>
        <Divider ml={4} borderColor={dividerColor} />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={8}>
        <SkillCategory title="Frontend Development" skills={frontendSkills} />
        <SkillCategory title="Backend Development" skills={backendSkills} />
        <SkillCategory title="DevOps & Tools" skills={devOpsSkills} />
      </SimpleGrid>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        textAlign="center"
        mt={12}
      >
        <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="lg">
          Continuously learning and expanding my skill set to stay current with industry trends and best practices.
        </Text>
      </MotionBox>
    </Box>
  )
}

