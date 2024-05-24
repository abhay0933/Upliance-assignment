import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ initialContent }) => {
  const [editorContent, setEditorContent] = useState('');
  const toast = useToast();

  useEffect(() => {
    if (initialContent) {
      // Convert the object to string format
      const stringContent = JSON.stringify(initialContent);
      setEditorContent(stringContent);
    } else {
      const savedContent = localStorage.getItem('editorContent');
      if (savedContent) {
        setEditorContent(savedContent);
      }
    }
  }, [initialContent]);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    localStorage.setItem('editorContent', editorContent);
    toast({
      title: 'Content saved.',
      description: 'Your content has been saved to local storage.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const editorSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { tension: 200, friction: 20 } });

  return (
    <animated.div style={editorSpring}>
      <Flex direction="column" align="center" boxShadow="lg" border='1px solid white' borderRadius='10px' justify="center" minH="100vh" p="4">
        <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="center">Rich Text Editor</Text>
        <Box width="800px"  p="6" borderRadius="md" bg="white">
          <ReactQuill 
            value={editorContent} 
            onChange={handleEditorChange} 
            theme="snow" 
            style={{ height: '300px', color:'black' }} 
          />
          <Button colorScheme="blue" mt="12" onClick={handleSave}>Save</Button>
        </Box>
      </Flex>
    </animated.div>
  );
};

export default RichTextEditor;
