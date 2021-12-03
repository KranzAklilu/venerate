import Image from "next/image";
import { Badge, Box, Heading, Text } from "@chakra-ui/layout";
import { AiOutlineEye, AiFillStar } from "react-icons/ai";
import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/tag";

const SinglePlaceCard = () => {
  return (
    <Box position="relative" maxW="300px" boxShadow="xl">
      <Tag pos="absolute" zIndex="10" top="4" left="10px" w="18" rounded="full">
        <TagLeftIcon color="orange" h="100%" as={AiFillStar} />
        <TagLabel>4.6(20)</TagLabel>
      </Tag>
      <Image
        height="200px"
        width="400px"
        objectFit="cover"
        src="/images/card.jpg"
        alt="image"
      />
      <Box px="3">
        <Box my="2" d="flex" justifyContent="space-between" alignItems="center">
          <Heading
            as="h4"
            fontSize="md"
            fontWeight="600"
            textTransform="capitalize"
          >
            cycling enthusiasts
          </Heading>
          <Badge colorScheme="green" px="2">
            Trending
          </Badge>
        </Box>
        <Box d="flex" alignItems="center">
          <AiOutlineEye color="green" />
          <Text as="span" fontSize="sm" ml="1" color="gray">
            50
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SinglePlaceCard;
