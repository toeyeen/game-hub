import { Platform } from '../hooks/useGames'
import { HStack, Text } from '@chakra-ui/react'
import { FaWindows, FaAndroid, FaLinux, FaApple, FaXbox, FaPlaystation } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { ReactNode } from 'react'

interface PlatformIconListProps {
  platforms: Platform[]
}

function PlatformIconList({ platforms }: PlatformIconListProps) {
  const iconMap: { [key: string]: ReactNode } = {
    playstation: <FaPlaystation />,
    pc: <FaWindows />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    linux: <FaLinux />,
    mac: <FaApple />,
    ios: <MdPhoneIphone />,
    android: <FaAndroid />,
    web: <BsGlobe />,
  }

  return (

    <HStack marginY={2}>
      {
        platforms.map(({ id, slug }) => {
          return (
            <Text key={id} color={'gray.500'}>
              {iconMap[slug]}
            </Text>
          )
        })
      }
    </HStack>
  )
}

export default PlatformIconList
