import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, useToast } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import './RichTextEditor.css'; // Custom CSS for the editor

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const toast = useToast();

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

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
      <Flex direction="column" align="center" justify="center" minH="100vh" p="4">
        <Box width="800px" boxShadow="lg" p="6" borderRadius="md" bg="white">
          <ReactQuill 
            value={editorContent} 
            onChange={handleEditorChange} 
            theme="snow" 
            style={{ height: '300px', color:'black' }} 

          />
          <Button colorScheme="blue" mt="18" onClick={handleSave}>Save</Button>
        </Box>
      </Flex>
    </animated.div>
  );
};

export default RichTextEditor;
