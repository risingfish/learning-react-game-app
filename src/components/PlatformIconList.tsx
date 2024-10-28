import ParentPlatform from "../interfaces/ParentPlatform";
import {HStack, Icon, Text} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone}  from 'react-icons/md';
import {SiNintendo}  from 'react-icons/si';
import {BsGlobe}  from 'react-icons/bs';
import {IconType} from "react-icons";




interface PlatformIconListProps {
    platforms: ParentPlatform[];
}

function PlatformIconList({platforms}: PlatformIconListProps) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
    }
    return (
        <HStack marginY={2}>
            {platforms.map((platform: ParentPlatform) => <Icon as={iconMap[platform.slug]} color='gray.500'/>)}
        </HStack>
    );
}

export default PlatformIconList;