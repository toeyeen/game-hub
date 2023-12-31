import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: PlatformSelectorProps) {

  const { data: platforms, error } = usePlatforms()

  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}> {platform.name} </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
