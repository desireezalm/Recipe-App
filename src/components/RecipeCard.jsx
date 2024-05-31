import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

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
      <CardBody>
        <Image w="10rem" src={item.image} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading fontSize={{ base: "sm", sm: "md" }}>{item.label}</Heading>
          <Text fontSize={{ base: "sm", sm: "md" }}>{item.mealType}</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>{item.dishType}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
