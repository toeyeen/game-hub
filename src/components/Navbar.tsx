import { HStack, Image } from '@chakra-ui/react'
import gamifyLogo from '../assets/gamify.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface NavbarProps {
  onSearch: (searchTerm: string) => void
}

function Navbar({ onSearch }: NavbarProps) {
  return (
    <HStack padding={'10px'} >
      <Image src={gamifyLogo} alt='logo' boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
