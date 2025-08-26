'use client'

import { useState, type FormEvent } from 'react'
import {
  Box,
  SimpleGrid,
  Flex,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  useColorModeValue,
  Link,
  InputGroup,
  InputLeftElement,
  Divider,
  useToast,
  Card,
  CardBody,
  CardHeader,
  Text,
  Heading,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'

const MotionCard = motion(Card)

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const iconColor = useColorModeValue('brand.600', 'brand.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const inputBgColor = useColorModeValue('white', 'gray.700')
  const cardBgColor = useColorModeValue('white', 'gray.800')
  const iconBgColor = useColorModeValue('brand.50', 'gray.700')
  const socialIconBgColor = useColorModeValue('gray.100', 'gray.700')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoLink = `mailto:muhammedhasnain3356@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`

    setTimeout(() => {
      window.location.href = mailtoLink

      toast({
        title: 'Message prepared',
        description: 'Your message is ready to be sent from your email client.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })

      setIsSubmitting(false)
    }, 800)
  }

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="stretch">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        bg={cardBgColor}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        shadow="md"
        overflow="hidden"
        height="100%"
      >
        <CardHeader
          bg={useColorModeValue('brand.50', 'gray.700')}
          py={6}
          px={8}
        >
          <Heading
            as="h3"
            size="lg"
            color={useColorModeValue('brand.700', 'white')}
          >
            Contact Information
          </Heading>
        </CardHeader>

        <CardBody p={8}>
          <VStack spacing={8} align="start">
            <HStack spacing={5}>
              <Flex
                w={14}
                h={14}
                align="center"
                justify="center"
                rounded="full"
                bg={iconBgColor}
                color={iconColor}
              >
                <Icon as={Mail} boxSize={6} />
              </Flex>
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  color={headingColor}
                  mb={1}
                >
                  Email
                </Text>
                <Link
                  href="mailto:muhammedhasnain3356@gmail.com"
                  color={iconColor}
                  fontWeight="medium"
                  fontSize="lg"
                  _hover={{ textDecoration: 'none', color: 'brand.500' }}
                >
                  muhammedhasnain3356@gmail.com
                </Link>
              </Box>
            </HStack>

            <HStack spacing={5}>
              <Flex
                w={14}
                h={14}
                align="center"
                justify="center"
                rounded="full"
                bg={iconBgColor}
                color={iconColor}
              >
                <Icon as={Phone} boxSize={6} />
              </Flex>
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  color={headingColor}
                  mb={1}
                >
                  Phone
                </Text>
                <Link
                  href="tel:+923256244441"
                  color={textColor}
                  fontSize="lg"
                  _hover={{ textDecoration: 'none', color: 'brand.500' }}
                >
                  +92 325 624 4441
                </Link>
              </Box>
            </HStack>

            <HStack spacing={5}>
              <Flex
                w={14}
                h={14}
                align="center"
                justify="center"
                rounded="full"
                bg={iconBgColor}
                color={iconColor}
              >
                <Icon as={MapPin} boxSize={6} />
              </Flex>
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  color={headingColor}
                  mb={1}
                >
                  Location
                </Text>
                <Text color={textColor} fontSize="lg">
                  Lahore, Punjab, Pakistan
                </Text>
              </Box>
            </HStack>

            <Divider my={2} />

            <Box width="100%">
              <Text fontWeight="bold" mb={5} color={headingColor} fontSize="lg">
                Connect on Social Media
              </Text>
              <HStack spacing={5}>
                <Link
                  href="https://github.com/hasnainaqa"
                  isExternal
                  aria-label="GitHub"
                >
                  <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    rounded="full"
                    bg={socialIconBgColor}
                    color={iconColor}
                    transition="all 0.3s"
                    _hover={{
                      bg: iconColor,
                      color: useColorModeValue('white', 'gray.800'),
                      transform: 'translateY(-2px)',
                      shadow: 'md',
                    }}
                  >
                    <Icon as={Github} boxSize={5} />
                  </Flex>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/hasnainaqa/"
                  isExternal
                  aria-label="LinkedIn"
                >
                  <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    rounded="full"
                    bg={socialIconBgColor}
                    color={iconColor}
                    transition="all 0.3s"
                    _hover={{
                      bg: iconColor,
                      color: useColorModeValue('white', 'gray.800'),
                      transform: 'translateY(-2px)',
                      shadow: 'md',
                    }}
                  >
                    <Icon as={Linkedin} boxSize={5} />
                  </Flex>
                </Link>
                {/* <Link href="https://twitter.com/" isExternal aria-label="Twitter">
                  <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    rounded="full"
                    bg={socialIconBgColor}
                    color={iconColor}
                    transition="all 0.3s"
                    _hover={{
                      bg: iconColor,
                      color: useColorModeValue("white", "gray.800"),
                      transform: "translateY(-2px)",
                      shadow: "md",
                    }}
                  >
                    <Icon as={Twitter} boxSize={5} />
                  </Flex>
                </Link> */}
              </HStack>
            </Box>
          </VStack>
        </CardBody>
      </MotionCard>

      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        as="form"
        onSubmit={handleSubmit}
        bg={cardBgColor}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        shadow="md"
        overflow="hidden"
      >
        <CardHeader
          bg={useColorModeValue('brand.50', 'gray.700')}
          py={6}
          px={8}
        >
          <Heading
            as="h3"
            size="lg"
            color={useColorModeValue('brand.700', 'white')}
          >
            Send a Message
          </Heading>
        </CardHeader>

        <CardBody p={8}>
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel
                htmlFor="name"
                color={headingColor}
                fontWeight="medium"
              >
                Name
              </FormLabel>
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <Icon as={User} color={iconColor} />
                </InputLeftElement>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  bg={inputBgColor}
                  borderColor={borderColor}
                  _hover={{ borderColor: 'brand.300' }}
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: `0 0 0 1px ${useColorModeValue('brand.500', 'brand.300')}`,
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel
                htmlFor="email"
                color={headingColor}
                fontWeight="medium"
              >
                Email
              </FormLabel>
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <Icon as={Mail} color={iconColor} />
                </InputLeftElement>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg={inputBgColor}
                  borderColor={borderColor}
                  _hover={{ borderColor: 'brand.300' }}
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: `0 0 0 1px ${useColorModeValue('brand.500', 'brand.300')}`,
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                htmlFor="subject"
                color={headingColor}
                fontWeight="medium"
              >
                Subject
              </FormLabel>
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <Icon as={MessageSquare} color={iconColor} />
                </InputLeftElement>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject of your message"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  bg={inputBgColor}
                  borderColor={borderColor}
                  _hover={{ borderColor: 'brand.300' }}
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: `0 0 0 1px ${useColorModeValue('brand.500', 'brand.300')}`,
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                htmlFor="message"
                color={headingColor}
                fontWeight="medium"
              >
                Message
              </FormLabel>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                bg={inputBgColor}
                borderColor={borderColor}
                size="lg"
                _hover={{ borderColor: 'brand.300' }}
                _focus={{
                  borderColor: 'brand.500',
                  boxShadow: `0 0 0 1px ${useColorModeValue('brand.500', 'brand.300')}`,
                }}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="brand"
              size="lg"
              width="full"
              mt={4}
              height="60px"
              rightIcon={<Icon as={Send} />}
              isLoading={isSubmitting}
              loadingText="Sending"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Send Message
            </Button>
          </VStack>
        </CardBody>
      </MotionCard>
    </SimpleGrid>
  )
}
