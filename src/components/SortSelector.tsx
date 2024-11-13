import React from "react";
import { Button, Menu, MenuItem, MenuList, MenuButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import Platform from "../interfaces/Platform";

interface Props {
    onSelectSort: (sort) => void;
}

function SortSelector({ onSelectSort }: Props) {
    const { data, error }: { data: Platform[]; error: string } = usePlatforms();

    if (error) return null;

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Order by: Relevance
                </MenuButton>
                <MenuList>
                    <MenuItem>Relevance</MenuItem>
                    <MenuItem>Date Added</MenuItem>
                    <MenuItem>Name</MenuItem>
                    <MenuItem>Release Date</MenuItem>
                    <MenuItem>Popularity</MenuItem>
                    <MenuItem>Average Rating</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
}

export default SortSelector;
