"use client"

import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionText = motion(Text)

export default function AnimatedLogo() {
  const letterVariants = {
    initial: { y: -5, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  const name = "HASNAIN"
  const textColor = useColorModeValue("brand.700", "brand.300")

  return (
    <MotionBox
      display="flex"
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {name.split("").map((letter, i) => (
        <MotionText
          key={i}
          variants={letterVariants}
          custom={i}
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color={textColor}
          letterSpacing="wider"
        >
          {letter}
        </MotionText>
      ))}
    </MotionBox>
  )
}

