import React from "react";
import { Button, Menu, MenuItem, MenuList, MenuButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import Platform from "../interfaces/Platform";

function PlatformSelector() {
    const { data, error }: { data: Platform[]; error: string } = usePlatforms();

    if (error) return null;

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Platform
                </MenuButton>
                <MenuList>
                    <MenuItem>Item 1</MenuItem>
                    {data.map((platform: Platform) => (
                        <MenuItem key={platform.id}>{platform.name}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
}

export default PlatformSelector;
