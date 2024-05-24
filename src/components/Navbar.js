import React from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { FiLogOut } from 'react-icons/fi';
import { signoutfn } from '../utils.js/firebasecontainer';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // React Spring animation
  const navbarSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 20 },
  });

  const handleLogout = async () => {
    try {
      await signoutfn();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <animated.nav style={navbarSpring}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        width="100vw"
        padding="1rem"
        mt= '-4'
        bg="teal.600"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Image
            src="https://cxotoday.com/wp-content/uploads/2024/02/upliance.ai-wordmark.png"
            alt="Company Logo"
            h="30px"
          />
        </Flex>
        {/* <Box>
          <Button
            onClick={handleLogout}
            leftIcon={<FiLogOut />}
            bg="transparent"
            border="1px"
            borderColor="white"
            _hover={{ bg: 'white', color: 'teal.500' }}
            color="white"
          >
            Logout
          </Button>
        </Box> */}
      </Flex>
    </animated.nav>
  );
};

export default Navbar;
