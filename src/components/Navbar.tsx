import React from "react";
import {HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/Logo/logo.webp'

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60px" />
            <Text>Nav Bar</Text>
        </HStack>
    );
}

export default NavBar;