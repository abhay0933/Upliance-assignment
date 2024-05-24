import React, { useState } from 'react';
import { Flex, Box, Heading, Input, Button, Link, Text, useToast } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signInWithGoogle } from '../utils.js/firebasecontainer';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Show success notification
        toast({
          title: 'Login Successfull.',
          description: '',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        navigate('/home')
      } catch (error) {
        setError(error.message);
        toast({
          title: 'An error occurred.',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
    

  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box p="8" maxW="400px" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h2" mb="4" textAlign="center">Login</Heading>
        <form onSubmit={handleLogin}>
          <Input mb="4" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input mb="4" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <Text color="red.500" mb="4">{error}</Text>}
          <Button type="submit" colorScheme="blue" width="100%">Login</Button>
        </form>
        <Text mt="4" textAlign="center">
          Don't have an account? <Link as={RouterLink} to="/signup" color="blue.500">Signup here</Link>
        </Text>
        <Button mt="4" colorScheme="red" width="100%" onClick ={signInWithGoogle}>Signup with Google</Button>
      </Box>
    </Flex>
  );
};

export default LoginPage;
