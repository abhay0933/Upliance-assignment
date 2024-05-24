import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";

const UserDataForm = ({ onUserDataSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isFormDirty, setIsFormDirty] = useState(false);

  const toast = useToast();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isFormDirty) {
        e.preventDefault();
        e.returnValue = ""; // Show a custom message in some browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = `user_${Date.now()}`; // Autogenerate user ID
    const userData = { ...formData, userId };
    localStorage.setItem("userData", JSON.stringify(userData)); // Save to local storage
    setIsFormDirty(false);
    toast({
      title: "User data saved.",
      description: `User ID: ${userId}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Pass user data to the parent component
    onUserDataSave(userData);
  };

  const formSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={formSpring}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        // minH="100vh"
        boxShadow="lg"
        mt= '10'
        p='5'
        borderRadius='10px'
        border='1px solid white'
      >
        <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="center">
          User Form
        </Text>
        <Box width="400px" p="12" borderRadius="md">
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="address" mb="4">
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="email" mb="4">
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="phone" mb="4">
              <FormLabel>Phone</FormLabel>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormControl>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </animated.div>
  );
};

export default UserDataForm;
