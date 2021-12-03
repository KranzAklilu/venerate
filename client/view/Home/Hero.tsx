import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";

const Hero = () => {
  return (
    <Box
      backgroundImage="url('/images/hero.jpg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      h="300px"
      px="20px"
      pt="145px"
      color="#fff"
    >
      <Heading as="h1" fontSize="24px">
        Explore Addis Ababas ins and outs
      </Heading>
      <Button bgColor="green" fontSize="sm" rounded="sm" w="100%">
        Start exploring
      </Button>
    </Box>
  );
};

export default Hero;
