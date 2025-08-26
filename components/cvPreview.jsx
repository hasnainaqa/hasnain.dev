"use client"; // <-- Add this
import {Box, Container, VStack, HStack, Text, Heading, Badge, Button, Card, CardBody, Grid, Progress, Flex, Icon, useColorModeValue} from '@chakra-ui/react'
import {Mail, Phone, Globe, Linkedin, MapPin, ExternalLink, Code2, Briefcase, GraduationCap, User, Wrench, Calendar, Building2, Star, Github} from 'lucide-react'

export function CVPreview() {
  const skills = [
    { name: 'HTML5/CSS3', level: 90, icon: Code2 },
    { name: 'JavaScript', level: 85, icon: Code2 },
    { name: 'React.js', level: 88, icon: Code2 },
    { name: 'Next.js', level: 85, icon: Code2 },
    { name: 'Tailwind CSS', level: 90, icon: Code2 },
    { name: 'MongoDB', level: 80, icon: Code2 },
  ]

  const experience = [
    {
      title: 'DevClan Lahore',
      role: 'Full Stack Developer',
      period: 'July 2025 - Present',
      description:
        'Currently working as a Frontend Developer, focusing on creating responsive and interactive user interfaces using modern web technologies. Contributing to various client projects with emphasis on performance optimization and user experience.',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
      type: 'Current Position',
      icon: Building2,
    },
    {
      title: 'Fazier.com',
      role: 'MERN Stack Developer',
      period: 'Dec 2023 - july 2025',
      description:
        'Worked as a MERN Stack web developer for a startup, contributing to the design and development of modern web pages using Next.js, Tailwind CSS, and other MERN technologies.',
      skills: ['Next.js', 'Tailwind CSS', 'MERN Stack', 'SEO'],
      type: 'Remote Work',
      icon: Code2,
    },
  ]

  const projects = [
    {
      title: 'Eupak Educational Consultant',
      role: 'Full-Stack Developer',
      period: 'Completed',
      description:
        'The website features a user-friendly interface, modern design, and seamless functionality. I implemented the SendGrid API to ensure smooth and reliable communication.',
      skills: ['React', 'SendGrid API', 'Responsive Design', 'MongoDB'],
      link: 'eupakeducation.com',
      type: 'Client Project',
      icon: Globe,
    },
    {
      title: 'SEO Analytics (FYP)',
      role: 'Lead Developer',
      period: 'Completed',
      description:
        'A full-stack web application designed to help users analyze website SEO performance and manage keyword strategies. Features keyword tracking, SEO score visualization, and audit reports.',
      skills: [
        'Next.js',
        'Node.js',
        'MongoDB',
        'REST APIs',
        'LemonSqueezy',
        'GSC API',
        'OpenAI API',
      ],
      link: 'github.com/hasnainaqa/seo',
      type: 'Final Year Project',
      icon: Star,
    },
  ]

  const bgGradient = useColorModeValue(
    'linear(to-br, cyan.50, orange.50, cyan.100)',
    'linear(to-br, cyan.900, orange.900, cyan.800)'
  )
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const mutedColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('cyan.500', 'cyan.300')
  const primaryColor = useColorModeValue('orange.500', 'orange.300')

  return (
    <Container maxW="4xl" py={6}>
      <VStack spacing={8} align="stretch">
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="2xl"
          bgGradient={bgGradient}
          p={8}
          border="1px"
          borderColor="gray.200"
          _dark={{ borderColor: 'gray.700' }}
        >
          <Box position="absolute" inset={0} opacity={0.05} />
          <VStack spacing={6} textAlign="center">
            <VStack spacing={3}>
              <Flex
                align="center"
                justify="center"
                w={20}
                h={20}
                borderRadius="full"
                bgGradient="linear(to-br, cyan.400, orange.400)"
                mb={4}
              >
                <Icon as={Code2} boxSize={10} color="white" />
              </Flex>
              <Heading
                size="3xl"
                bgGradient="linear(to-r, orange.400, cyan.400, orange.400)"
                bgClip="text"
                fontWeight="bold"
              >
                Hasnain Afzal
              </Heading>
              <HStack spacing={3} align="center">
                <Box w={8} h="1px" bg={accentColor} />
                <Text fontSize="2xl" color={mutedColor} fontWeight="medium">
                  Full-Stack Web Developer
                </Text>
                <Box w={8} h="1px" bg={accentColor} />
              </HStack>
            </VStack>

            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={4}
              maxW="2xl"
            >
              <Flex
                align="center"
                justify="center"
                gap={2}
                p={3}
                borderRadius="lg"
                bg="whiteAlpha.500"
                backdropFilter="blur(10px)"
                border="1px"
                borderColor="whiteAlpha.300"
              >
                <Icon as={Mail} boxSize={4} color={accentColor} />
                <Text fontSize="sm" fontWeight="medium">
                  muhammedhasnain3356@gmail.com
                </Text>
              </Flex>
              <Flex
                align="center"
                justify="center"
                gap={2}
                p={3}
                borderRadius="lg"
                bg="whiteAlpha.500"
                backdropFilter="blur(10px)"
                border="1px"
                borderColor="whiteAlpha.300"
              >
                <Icon as={Phone} boxSize={4} color={accentColor} />
                <Text fontSize="sm" fontWeight="medium">
                  03256244441
                </Text>
              </Flex>
              <Flex
                align="center"
                justify="center"
                gap={2}
                p={3}
                borderRadius="lg"
                bg="whiteAlpha.500"
                backdropFilter="blur(10px)"
                border="1px"
                borderColor="whiteAlpha.300"
              >
                <Icon as={MapPin} boxSize={4} color={accentColor} />
                <Text fontSize="sm" fontWeight="medium">
                  Gujranwala, Punjab
                </Text>
              </Flex>
            </Grid>

            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Icon as={Globe} />}
                rightIcon={<Icon as={ExternalLink} boxSize={3} opacity={0.6} />}
                bg="whiteAlpha.800"
                backdropFilter="blur(10px)"
                borderColor="cyan.300"
                _hover={{ bg: 'cyan.50', borderColor: 'cyan.400' }}
                transition="all 0.3s"
              >
                hasnainafzal-dev.vercel.app
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Icon as={Linkedin} />}
                rightIcon={<Icon as={ExternalLink} boxSize={3} opacity={0.6} />}
                bg="whiteAlpha.800"
                backdropFilter="blur(10px)"
                borderColor="cyan.300"
                _hover={{ bg: 'cyan.50', borderColor: 'cyan.400' }}
                transition="all 0.3s"
              >
                LinkedIn Profile
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Icon as={Github} />}
                rightIcon={<Icon as={ExternalLink} boxSize={3} opacity={0.6} />}
                bg="whiteAlpha.800"
                backdropFilter="blur(10px)"
                borderColor="cyan.300"
                _hover={{ bg: 'cyan.50', borderColor: 'cyan.400' }}
                transition="all 0.3s"
              >
                GitHub Profile
              </Button>
            </HStack>
          </VStack>
        </Box>

        <Card bg={cardBg}>
          <CardBody p={6}>
            <HStack spacing={2} mb={4}>
              <Icon as={User} boxSize={6} color={accentColor} />
              <Heading size="xl" color={primaryColor}>
                Profile
              </Heading>
            </HStack>
            <Text color={mutedColor} lineHeight="relaxed">
              I am a passionate Full-Stack Web Developer with experience in
              front-end and back-end development. I have successfully
              implemented payment gateways, authentication systems, and database
              optimizations to enhance functionality. Beyond development, I am
              always eager to learn new technologies, collaborate with teams,
              and build innovative solutions. My goal is to create seamless
              digital experiences that drive efficiency and user engagement.
            </Text>
          </CardBody>
        </Card>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
          <Card bg={cardBg}>
            <CardBody p={6}>
              <HStack spacing={2} mb={6}>
                <Icon as={Code2} boxSize={6} color={accentColor} />
                <Heading size="xl" color={primaryColor}>
                  Technical Skills
                </Heading>
              </HStack>
              <VStack spacing={4} align="stretch">
                {skills.map((skill) => (
                  <Box key={skill.name}>
                    <Flex justify="space-between" align="center" mb={2}>
                      <HStack>
                        <Icon as={skill.icon} boxSize={4} color={accentColor} />
                        <Text fontWeight="medium">{skill.name}</Text>
                      </HStack>
                      <Text fontSize="sm" color={mutedColor}>
                        {skill.level}%
                      </Text>
                    </Flex>
                    <Progress
                      value={skill.level}
                      colorScheme="cyan"
                      size="sm"
                      borderRadius="full"
                      bg="gray.200"
                      _dark={{ bg: 'gray.600' }}
                    />
                  </Box>
                ))}
              </VStack>


            </CardBody>
          </Card>

          <Card bg={cardBg}>
            <CardBody p={6}>
              <HStack spacing={2} mb={6}>
                <Icon as={GraduationCap} boxSize={6} color={accentColor} />
                <Heading size="xl" color={primaryColor}>
                  Education
                </Heading>
              </HStack>
              <Box borderLeft="4px" borderColor={accentColor} pl={4}>
                <HStack spacing={2} mb={1}>
                  <Icon as={GraduationCap} boxSize={5} color={accentColor} />
                  <Heading size="lg">BS Computer Science</Heading>
                </HStack>
                <Text color={accentColor} fontWeight="medium">
                  University of Gujrat
                </Text>
                <HStack spacing={1} mt={1}>
                  <Icon as={Calendar} boxSize={3} />
                  <Text fontSize="sm" color={mutedColor}>
                    2021 - 2025
                  </Text>
                </HStack>

              </Box>
              <Box mt={6}>
                <HStack spacing={2} mb={3}>
                  <Icon as={Wrench} boxSize={4} color={accentColor} />
                  <Text fontWeight="semibold">Tools & Languages</Text>
                </HStack>
                <Flex flexWrap="wrap" gap={2}>
                  {[
                    { name: 'GitHub', icon: Github },
                    { name: 'Vercel', icon: Globe },
                    { name: 'VS Code', icon: Code2 },
                    { name: 'Urdu', icon: Globe },
                    { name: 'English', icon: Globe },
                  ].map((tool) => (
                    <Badge
                      key={tool.name}
                      variant="subtle"
                      colorScheme="gray"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <Icon as={tool.icon} boxSize={3} />
                      {tool.name}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </CardBody>
          </Card>
        </Grid>

        <Card bg={cardBg}>
          <CardBody p={6}>
            <HStack spacing={2} mb={6}>
              <Icon as={Briefcase} boxSize={6} color={accentColor} />
              <Heading size="xl" color={primaryColor}>
                Professional Experience
              </Heading>
            </HStack>
            <VStack spacing={6} align="stretch">
              {experience.map((exp, index) => (
                <Box
                  key={index}
                  borderLeft="4px"
                  borderColor={accentColor}
                  pl={6}
                >
                  <Flex
                    justify="space-between"
                    align="start"
                    flexWrap="wrap"
                    gap={2}
                    mb={3}
                  >
                    <Box>
                      <HStack spacing={2} mb={1}>
                        <Icon as={exp.icon} boxSize={5} color={accentColor} />
                        <Heading size="lg">{exp.title}</Heading>
                      </HStack>
                      <Text color={accentColor} fontWeight="medium">
                        {exp.role}
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Badge
                        colorScheme={
                          exp.type === 'Current Position' ? 'cyan' : 'gray'
                        }
                        variant={
                          exp.type === 'Current Position' ? 'solid' : 'outline'
                        }
                      >
                        {exp.type}
                      </Badge>
                      <HStack spacing={1} mt={1} justify="flex-end">
                        <Icon as={Calendar} boxSize={3} />
                        <Text fontSize="sm" color={mutedColor}>
                          {exp.period}
                        </Text>
                      </HStack>
                    </Box>
                  </Flex>

                  <Text color={mutedColor} lineHeight="relaxed" mb={3}>
                    {exp.description}
                  </Text>

                  <Flex flexWrap="wrap" gap={2}>
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="subtle"
                        colorScheme="gray"
                        fontSize="xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              ))}
            </VStack>
          </CardBody>
        </Card>

        <Card bg={cardBg}>
          <CardBody p={6}>
            <HStack spacing={2} mb={6}>
              <Icon as={Star} boxSize={6} color={accentColor} />
              <Heading size="xl" color={primaryColor}>
                Featured Projects
              </Heading>
            </HStack>
            <VStack spacing={6} align="stretch">
              {projects.map((project, index) => (
                <Box
                  key={index}
                  borderLeft="4px"
                  borderColor={accentColor}
                  pl={6}
                >
                  <Flex
                    justify="space-between"
                    align="start"
                    flexWrap="wrap"
                    gap={2}
                    mb={3}
                  >
                    <Box>
                      <HStack spacing={2} mb={1}>
                        <Icon
                          as={project.icon}
                          boxSize={5}
                          color={accentColor}
                        />
                        <Heading size="lg">{project.title}</Heading>
                      </HStack>
                      <Text color={accentColor} fontWeight="medium">
                        {project.role}
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Badge variant="outline" colorScheme="gray">
                        {project.type}
                      </Badge>
                      <HStack spacing={1} mt={1} justify="flex-end">
                        <Icon as={Calendar} boxSize={3} />
                        <Text fontSize="sm" color={mutedColor}>
                          {project.period}
                        </Text>
                      </HStack>
                    </Box>
                  </Flex>

                  <Text color={mutedColor} lineHeight="relaxed" mb={3}>
                    {project.description}
                  </Text>

                  <Flex flexWrap="wrap" gap={2} mb={3}>
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="subtle"
                        colorScheme="gray"
                        fontSize="xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Flex>

                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<Icon as={ExternalLink} />}
                      bg="transparent"
                    >
                      {project.link}
                    </Button>
                  )}
                </Box>
              ))}
            </VStack>
          </CardBody>
        </Card>

        <Box
          textAlign="center"
          py={6}
          borderTop="1px"
          borderColor="gray.200"
          _dark={{ borderColor: 'gray.700' }}
        >
          <HStack justify="center" spacing={2}>
            <Icon as={Code2} boxSize={4} />
            <Text fontSize="sm" color={mutedColor}>
              © 2024 Hasnain Afzal • Building innovative digital solutions
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Container>
  )
}
