import React from 'react';
import {Flex,
Box,
Heading,
FormControl,
FormLabel,
Input,
Button } from '@chakra-ui/core';
import {handleSubmit,setEmail,setPassword} from '.components/Login/Login';

export default function LoginForm() {
    return (
        <Flex width="Full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading> Login </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel> Email </FormLabel>
                            <Input type="email" 
                                placeholder="test@test.com"
                                size="lg"
                                onChange = {event => setEmail(event.currentTarget.value)}
                        />
                        </FormControl>
                        <FormControl isRequired mt={6}>
                            <FormLabel> Password </FormLabel>
                            <Input type="password" 
                                placeholder="********"
                                size="lg"
                                onChange={event => setPassword(event.currentTarget.value)}
                        />
                        </FormControl>
                        <Button variantColor="teal" variant="outline" width="full" mt={4} type="submit">
                            Sign In 
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}

