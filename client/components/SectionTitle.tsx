import { Heading, Text } from "@chakra-ui/layout";
import { Circle } from "@chakra-ui/react";
import { FC } from "react";

const SectionTitle: FC = ({ children }) => {
  return (
    <Heading mb="3" as="h2" fontSize="xl" fontWeight="regular">
      {children}
      <Text
        as="span"
        d="inline-block"
        bgColor="green"
        ml="2"
        h="6px"
        w="6px"
        borderRadius="50%"
      ></Text>
    </Heading>
  );
};

export default SectionTitle;
