import React from "react";
import { Button, Menu, MenuItem, MenuList, MenuButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import GameQuery from "../interfaces/GameQuery";
import Platform from "../interfaces/Platform";

interface Props {
    gameQuery: GameQuery;
    onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ gameQuery, onSelectPlatform }: Props) {
    const {platform: selectedPlatform} = gameQuery;
    const { data, error }: { data: Platform[]; error: string } = usePlatforms();

    if (error) return null;
    console.log("Game query is:", gameQuery);

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {selectedPlatform?.name || "Platform"}
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
