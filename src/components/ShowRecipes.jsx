import { Flex } from "@chakra-ui/react";
import { RecipeCard } from "RecipeCard";

export const ShowRecipes = ({ recipeList, clickFn }) => {
  return (
    <Flex gap={8} w="100%" flexWrap="wrap" justify={"space-evenly"}>
      {recipeList.map((item) => (
        <RecipeCard key={item.recipe.label} recipe={item} clickFn={clickFn} />
      ))}
    </Flex>
  );
};
