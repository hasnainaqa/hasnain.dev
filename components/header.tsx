"use client"

import { Box, Flex, HStack, Button, useColorModeValue } from "@chakra-ui/react"
import AnimatedLogo from "./animated-logo"
import ColorModeToggle from "./color-mode-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.100", "gray.700")

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bgColor}
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
      px={{ base: 4, md: 6 }}
      py={3}
    >
      <Flex alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto">
        <Link href="/" passHref>
          <AnimatedLogo />
        </Link>

        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link href="/" passHref>
            <Button variant={isActive("/") ? "solid" : "ghost"} colorScheme="brand" size="sm">
              Home
            </Button>
          </Link>
          <Link href="/projects" passHref>
            <Button variant={isActive("/projects") ? "solid" : "ghost"} colorScheme="brand" size="sm">
              Projects
            </Button>
          </Link>
          <Link href="/resume" passHref>
            <Button variant={isActive("/resume") ? "solid" : "ghost"} colorScheme="brand" size="sm">
              Resume
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant={isActive("/contact") ? "solid" : "ghost"} colorScheme="brand" size="sm">
              Contact
            </Button>
          </Link>
        </HStack>

        <HStack spacing={3}>
          <ColorModeToggle />
          <Button
            display={{ base: "none", md: "inline-flex" }}
            colorScheme="brand"
            size="sm"
            fontWeight="medium"
            rounded="md"
          >
            Contact Me
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

