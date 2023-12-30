import { HStack, Image, Text } from '@chakra-ui/react'
import gamifyLogo from '../assets/gamify.svg'

function Navbar() {
  return (
    <HStack>
      <Image src={gamifyLogo} alt='logo' boxSize='60px' marginLeft={2} />
      <Text color='white'>
        Navbar </Text>
    </HStack>
  )
}

export default Navbar
