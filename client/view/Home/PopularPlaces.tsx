import { Box } from "@chakra-ui/layout";
import SectionTitle from "../../components/SectionTitle";
import SinglePlaceCard from "../../components/SinglePlaceCard";

const PopularPlaces = () => {
  return (
    <Box mt="8" px="5" py="4">
      <SectionTitle>Most Popular Places</SectionTitle>
      <SinglePlaceCard />
    </Box>
  );
};

export default PopularPlaces;
