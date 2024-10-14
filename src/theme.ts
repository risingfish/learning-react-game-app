import { extendTheme, ThemeConfig} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme: Record<string, any>= extendTheme({ config })

export default theme;