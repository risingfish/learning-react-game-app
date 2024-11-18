import React from "react";
import {
    ColorMode,
    HStack,
    Switch,
    Text,
    useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {
        toggleColorMode,
        colorMode,
    }: { toggleColorMode: () => void; colorMode: ColorMode } = useColorMode();

    return (
        <HStack>
            <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
                colorScheme="green"
            />
            <Text whiteSpace='nowrap'>Dark Mode</Text>
        </HStack>
    );
};

export default ColorModeSwitch;
