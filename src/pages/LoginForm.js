import React, { useState } from 'react';
import {Flex,
Box,
Heading,
FormControl,
FormLabel,
Input,
Button, 
CircularProgress } from '@chakra-ui/core';

import { userLogin } from '../utils/mockApi';
import ErrorMessage from '../components/ErrorMessage';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await userLogin({email, password });
            setIsLoading(false);
        } catch (error) {
            setError('Invalid username or password');
            setIsLoading(false);
            setEmail('');
            setPassword('')
        }
    };

    return (
        <Flex width="Full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading> Login </Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        {error && <ErrorMessage message={error} />}s
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
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ): (
                                'Sign In'
                            )}
                            
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}