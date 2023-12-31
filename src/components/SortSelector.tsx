import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

function SortSelector() {
  // const { data: platforms, error } = usePlatforms()

  // if (error) return null

  const filters = [{ id: 1, name: 'Relevance' }, { id: 2, name: 'Popularity' }, { id: 3, name: 'Release Date' }, { id: 4, name: 'Average Rating' }, { id: 5, name: 'Name' }, { id: 6, name: 'Date Added' }]
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By Relevance
      </MenuButton>
      <MenuList>

        {filters.map((item, index) => <MenuItem key={index}> {item.name}  </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
