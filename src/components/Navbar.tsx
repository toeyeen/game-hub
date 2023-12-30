import { HStack, Image } from '@chakra-ui/react'
import gamifyLogo from '../assets/gamify.svg'
import ColorModeSwitch from './ColorModeSwitch'

function Navbar() {
  return (
    <HStack justifyContent={'space-between'} paddingX={3} >
      <Image src={gamifyLogo} alt='logo' boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
