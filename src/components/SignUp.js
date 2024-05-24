import React, { useState } from 'react';
import { Flex, Box, Heading, Input, Button, Link, Text, useToast } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signInWithGoogle } from '../utils.js/firebasecontainer';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();  // Initialize useToast

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Show success notification
      toast({
        title: 'Account created.',
        description: 'Your account has been created successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
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
        <Heading as="h2" mb="4" textAlign="center">Signup</Heading>
        <form onSubmit={handleSignup}>
          <Input mb="4" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input mb="4" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input mb="4" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {error && <Text color="red.500" mb="4">{error}</Text>}
          <Button type="submit" colorScheme="blue" width="100%">Sign up</Button>
        </form>
        <Text mt="4" textAlign="center">
          Already have an account? <Link as={RouterLink} to="/login" color="blue.500">Login here</Link>
        </Text>
        {/* Button for signup with Google */}
        <Button mt="4" colorScheme="red" width="100%" onClick={signInWithGoogle}>Signup with Google</Button>
      </Box>
    </Flex>
  );
};

export default SignupPage;
