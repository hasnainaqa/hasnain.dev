"use client"

import {
  Box,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure,
  Menu,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import AnimatedLogo from "./animated-logo"
import ColorModeToggle from "./color-mode-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useRef } from "react"

export default function Header() {
  const pathname = usePathname()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.100", "gray.700")

  const navItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/resume", label: "Resume" },
      { href: "/contact", label: "Contact" },
    ],
    []
  )

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
        {/* Logo */}
        <Link href="/" passHref>
          <AnimatedLogo />
        </Link>

        {/* Desktop Navigation */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Button
                variant={pathname === item.href ? "solid" : "ghost"}
                colorScheme="brand"
                size="sm"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </HStack>

        {/* Right Side */}
        <HStack spacing={3}>
          <ColorModeToggle />

          {/* Desktop CTA */}
          <Button
            display={{ base: "none", md: "inline-flex" }}
            colorScheme="brand"
            size="sm"
            fontWeight="medium"
            rounded="md"
            as={Link}
            href="/contact"
          >
            Contact Me
          </Button>

          {/* Mobile Hamburger */}
          <IconButton
            ref={btnRef}
            display={{ base: "inline-flex", md: "none" }}
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                  <Button
                    onClick={onClose}
                    w="100%"
                    justifyContent="flex-start"
                    variant={pathname === item.href ? "solid" : "ghost"}
                    colorScheme="brand"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Button
                as={Link}
                href="/contact"
                onClick={onClose}
                colorScheme="brand"
                w="100%"
              >
                Contact Me
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
