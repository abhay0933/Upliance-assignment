import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const Counter = ({ count, handleIncrement, handleDecrement, handleReset }) => {
  return (
    <Box p="6" boxShadow="lg" borderRadius="md" border = '1px solid white' bg="transparent" mt='10' w="500px" h="500px">
      <Flex direction="column" align="center">
        <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="center">Counter</Text>
        <Flex direction="column" align="center" justify="center" flex="1">
          <Text fontSize="4xl" mb="4" mt= '20'>Count: {count}</Text>
          <Flex>
            <Button onClick={handleIncrement} colorScheme="blue" mr="4">Increment</Button>
            <Button onClick={handleDecrement} colorScheme="blue" mr="4">Decrement</Button>
            <Button onClick={handleReset} colorScheme="red">Reset</Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Counter;
