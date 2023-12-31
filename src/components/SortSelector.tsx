import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

export interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: SortFilter) => void
  selectedSortOrder: string
}


export interface SortFilter {
  id: number
  name: string
  value: string
}

const filters = [{ id: 1, name: 'Relevance', value: '' }, { id: 2, name: 'Popularity', value: '-metacritic' }, { id: 3, name: 'Release Date', value: '-released' }, { id: 4, name: 'Average Rating', value: '-rating' }, { id: 5, name: 'Name', value: 'name' }, { id: 6, name: 'Date Added', value: '-added' }]

function SortSelector({ onSelectSortOrder, selectedSortOrder }: SortSelectorProps) {

  const filterMethod = filters.find(item => item.value === selectedSortOrder)


  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {filterMethod?.name || 'Relevance'}
      </MenuButton>
      <MenuList>
        {filters.map((item, index) => <MenuItem onClick={() => onSelectSortOrder(item)} key={index}> {item.name}  </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
