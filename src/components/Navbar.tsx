import { Box, HStack, Image } from '@chakra-ui/react'
import gamifyLogo from '../assets/gamify.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface NavbarProps {
  onSearch: (searchTerm: string) => void
}

function Navbar({ onSearch }: NavbarProps) {
  return (
    <HStack padding={'10px'} >
      <Image src={gamifyLogo} alt='logo' boxSize='80px' />
      <SearchInput onSearch={onSearch} />
      <Box w={'180px'}>
        <ColorModeSwitch />
      </Box>
    </HStack>
  )
}

export default Navbar
