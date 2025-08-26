'use client'

import { Box, Icon, useColorModeValue } from '@chakra-ui/react'
import {
  Code,
  Database,
  FileCode,
  Layers,
  Layout,
  Monitor,
  Server,
  Smartphone,
  Terminal,
  Zap,
  Cpu,
  Globe,
  Cloud,
  GitBranch,
  Compass,
} from 'lucide-react'

export default function BackgroundIcons() {
  const iconColor = useColorModeValue('brand.500', 'brand.200')

  const icons = [
    { icon: Code, top: '10%', left: '5%', size: 24 },
    { icon: Database, top: '25%', right: '8%', size: 28 },
    { icon: FileCode, bottom: '15%', left: '12%', size: 32 },
    { icon: Layers, top: '15%', left: '30%', size: 20 },
    { icon: Layout, bottom: '30%', right: '15%', size: 26 },
    { icon: Monitor, top: '40%', left: '8%', size: 22 },
    { icon: Server, bottom: '10%', right: '25%', size: 30 },
    { icon: Smartphone, top: '20%', right: '30%', size: 18 },
    { icon: Terminal, bottom: '25%', left: '25%', size: 24 },
    { icon: Zap, top: '5%', right: '15%', size: 20 },
    { icon: Cpu, bottom: '5%', left: '40%', size: 22 },
    { icon: Globe, top: '35%', right: '40%', size: 28 },
    { icon: Cloud, bottom: '40%', right: '5%', size: 26 },
    { icon: GitBranch, top: '50%', left: '15%', size: 24 },
    { icon: Compass, bottom: '20%', right: '35%', size: 20 },
  ]

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      opacity={0.02}
      zIndex={0}
      overflow="hidden"
    >
      {icons.map((item, index) => (
        <Icon
          key={index}
          as={item.icon}
          position="absolute"
          top={item.top}
          left={item.left}
          right={item.right}
          bottom={item.bottom}
          w={item.size}
          h={item.size}
          color={iconColor}
        />
      ))}
    </Box>
  )
}
