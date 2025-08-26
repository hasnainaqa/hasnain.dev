'use client'

import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)
const MotionText = motion(Text)

export default function AnimatedLogo() {
  const [mounted, setMounted] = useState(false)
  const name = 'HASNAIN'
  const textColor = useColorModeValue('brand.700', 'brand.300')

  const letterVariants = {
    initial: { y: -5, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <MotionBox
      display="flex"
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onAnimationComplete={() => setMounted(true)} // switch after entry animation
    >
      {name.split('').map((letter, i) => (
        <MotionText
          key={i}
          custom={i}
          variants={!mounted ? letterVariants : undefined}
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          color={textColor}
          letterSpacing="wider"
          animate={
            mounted
              ? {
                  y: [0, -8, 0],
                  color: [textColor],
                  opacity: [1, 0.85, 1],
                  scale: [1, 1.05, 1],
                }
              : undefined
          }
          transition={
            mounted
              ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }
              : undefined
          }
        >
          {letter}
        </MotionText>
      ))}
    </MotionBox>
  )
}
