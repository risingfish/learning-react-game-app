import React from "react";
import { Button, Menu, MenuItem, MenuList, MenuButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import Platform from "../interfaces/Platform";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ onSelectPlatform }: Props) {
    const { data, error }: { data: Platform[]; error: string } = usePlatforms();

    if (error) return null;

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Platform
                </MenuButton>
                <MenuList>
                    {data.map((platform: Platform) => (
                        <MenuItem
                            onClick={() => onSelectPlatform(platform)}
                            key={platform.id}
                        >
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
}

export default PlatformSelector;
