"use client"

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Moon, Sun } from "lucide-react"

export default function ColorModeToggle() {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(Moon, Sun)
  const ariaLabel = useColorModeValue("Switch to dark mode", "Switch to light mode")

  return (
    <IconButton
      size="sm"
      variant="ghost"
      aria-label={ariaLabel}
      icon={<SwitchIcon size={18} />}
      onClick={toggleColorMode}
      color={useColorModeValue("gray.600", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.700"),
      }}
    />
  )
}

