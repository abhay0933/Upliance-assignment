import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import Counter from './Counter';
import UserDataForm from './UserFormData';
import RichTextEditor from './RichTextEditor';
import Navbar from './Navbar'; // Importing the Navbar component
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const handleIncrement = () => setCount(prevCount => (prevCount < 50 ? prevCount + 1 : prevCount));
  const handleDecrement = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  const handleReset = () => setCount(0);

  const heightSpring = useSpring({
    height: `${2 * count}%`, // 2% per count value for smoother transition up to 100%
    config: { tension: 200, friction: 20 }
  });

  const colorSpring = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${Math.min(count * 0.02, 1)})`, // Adjust opacity based on count
    config: { tension: 200, friction: 20 }
  });

  // Function to handle saving user data from UserDataForm component
  const handleUserDataSave = (data) => {
    setUserData(data);
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p="4" position="relative" overflow="hidden">
      <animated.div style={{ ...heightSpring, ...colorSpring, position: 'absolute', top: 0, left: 0, right: 0, zIndex: -1 }} />
      <Navbar /> {/* Navbar Component */}
      <Flex direction="row" justify="space-between" width="100%" maxW="1200px" mb="8">
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
        <UserDataForm onUserDataSave={handleUserDataSave} />
      </Flex>
      <Box width="100%" maxW="1200px">
        <RichTextEditor initialContent={userData} />
      </Box>
    </Flex>
  );
};

export default Home;
