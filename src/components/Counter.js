import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const Counter = ({ count, handleIncrement, handleDecrement, handleReset }) => {
  return (
    <Box p="4" boxShadow="lg" borderRadius="md" bg="transparent" w="500px" h="500px">
      <Flex direction="column" align="center" justify="center" height="100%">
        <Text fontSize="4xl" mb="4">Count: {count}</Text>
        <Flex>
          <Button onClick={handleIncrement} colorScheme="blue" mr="4">Increment</Button>
          <Button onClick={handleDecrement} colorScheme="blue" mr="4">Decrement</Button>
          <Button onClick={handleReset} colorScheme="red">Reset</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Counter;
