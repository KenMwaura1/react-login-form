import React from 'react';
import {Flex,
Box,
Heading,
FormControl,
FormLabel,
Input,
Button } from '@chakra-ui/core';

export default function LoginForm() {
    return (
        <Flex width="Full" align="center" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                    <Heading> Login</Heading>
                </Box>
            </Box>
        </Flex>
    );
}