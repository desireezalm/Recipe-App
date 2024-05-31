import { Center, Flex, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  const recipeList = data.hits;
  console.log(recipeList);

  return (
    <Center flexDir="column">
      <Flex
        gap={8}
        w="100%"
        h="100%"
        flexDirection={{ base: "column", sm: "row" }}
        justify="center"
        alignItems="center"
        wrap="wrap"
        padding="2rem"
      >
        {recipeList.map((item) => (
          <RecipeCard
            clickFn={clickFn}
            item={item.recipe}
            key={item.recipe.label}
          />
        ))}
      </Flex>
    </Center>
  );
};
