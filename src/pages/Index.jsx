import { Container, VStack, Button, Text, useBoolean } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isRunning, setIsRunning] = useBoolean();
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && elapsedTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">{elapsedTime} Seconds</Text>
        <Button colorScheme="blue" size="lg" onClick={setIsRunning.toggle}>
          {isRunning ? 'Stop' : 'Start'}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;