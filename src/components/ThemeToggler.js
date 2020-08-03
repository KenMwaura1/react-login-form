import React from 'react';
import {useColorMode,Box,IconButton} from '@chakra-ui/core';
export default function ThemeToggler() {
    const { colorMode,toggleColorMode } = useColorMode();
    return (
        <Box textAlign="right" py={4} mr={12}>
            <IconButton
             icon={colorMode ==='light'? 'moon':'sun'}
             onClick={toggleColorMode}
             variant="ghost"
             />

        </Box>
    );
}