import { CVPreview } from '@/components/cvPreview'
import { Box } from '@chakra-ui/react'

export default function CvPreview() {
  return (
    <Box as="main" minH="100vh" bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <title>Hasnain Resume</title>

      <CVPreview />
    </Box>
  )
}
