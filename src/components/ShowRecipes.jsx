import { Flex } from "@chakra-ui/react";
//import { data } from "../utils/data";
import { RecipeCard } from "./RecipeCard";

export const ShowRecipes = ({ recipeList, clickFn }) => {
  /*
  const recipeList = data.hits;
  console.log(recipeList[0]);
  */

  return (
    <Flex
      gap={8}
      w="100%"
      h="100%"
      flexDirection={{ base: "column", sm: "row" }}
      justify="center"
      alignItems="center"
      wrap="wrap"
      padding={{ base: 0, sm: "2rem" }}
    >
      {recipeList.map((item) => (
        <RecipeCard
          clickFn={clickFn}
          item={item.recipe}
          key={item.recipe.label}
        />
      ))}
    </Flex>
  );
};
