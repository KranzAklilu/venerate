import { Box, Text, IconButton } from "@chakra-ui/react";
import { AiOutlineBehance, AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <Box
      w="100%"
      px="30px"
      py="20px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconButton aria-label="Logo" rounded="100%">
        <AiOutlineBehance />
      </IconButton>
      <Text>Hello, Alexander</Text>

      <AiOutlineBell fontSize="20px" />
    </Box>
  );
};

export default Header;
