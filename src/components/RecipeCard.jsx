import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { TagItem } from "./ui/TagItem";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      cursor="pointer"
      w="20rem"
      h="fit-content"
      onClick={() => clickFn(recipe)}
      _hover={{ bgColor: "teal.200" }}
    >
      <CardBody>
        <Image w="sm" h={48} src={recipe.image} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading fontSize={{ base: "sm", sm: "md" }}>{recipe.title}</Heading>
          <Text fontSize={{ base: "sm", sm: "md" }}>{recipe.summary}</Text>
          <Spacer />
          <Flex gap={2} wrap="wrap">
            {recipe.skills.map((skill) => (
              <TagItem key={skill}>{skill}</TagItem>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
