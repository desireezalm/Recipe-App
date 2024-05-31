import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const RecipeCard = ({ item, clickFn }) => {
  console.log(item[0]);

  return (
    <Card
      borderRadius="xl"
      cursor="pointer"
      bgColor="teal.200"
      w="20rem"
      h="fit-content"
      onClick={() => clickFn(item.recipe)}
      _hover={{ bgColor: "teal.300" }}
    >
      <Image
        w="20rem"
        h="20rem"
        objectFit="cover"
        src={item.image}
        borderTopRadius="xl"
      />
      <CardBody>
        <Stack mt="3" spacing="2">
          <Text
            color="whiteAlpha.800"
            fontWeight="light"
            fontSize={{ base: "sm", sm: "md" }}
            textAlign="center"
            fontFamily="fantasy"
            letterSpacing="widest"
          >
            {item.mealType}
          </Text>
          <Heading fontWeight="extrabold" fontSize={{ base: "md", sm: "lg" }}>
            {item.label}
          </Heading>

          <Text fontSize={{ base: "sm", sm: "md" }}>
            <Text display="inline-block" fontWeight="bold">
              Dish:{" "}
            </Text>{" "}
            {item.dishType}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
