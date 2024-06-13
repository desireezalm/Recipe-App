import { Center, Heading } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

import { data } from "./utils/data";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(data.hits[0].recipe);
  const pageTitle = "The Recipe Collector";

  console.log(data.hits[0]);

  return (
    <Center bgColor="teal.100" flexDir="column">
      <Heading
        fontFamily="fantasy"
        letterSpacing="widest"
        size={{ base: "xl", sm: "2xl", md: "3xl" }}
        maxW="100vw"
        mt={2}
        mb={2}
        color="teal.600"
      >
        {pageTitle}
      </Heading>
      <RecipePage item={selectedRecipe} />
    </Center>
  );
  /*
  return (
    <Center bgColor="teal.100" flexDir="column">
      <Heading
        fontFamily="fantasy"
        letterSpacing="widest"
        size={{ base: "xl", sm: "2xl", md: "3xl" }}
        maxW="100vw"
        mt={2}
        mb={2}
        color="teal.600"
      >
        {pageTitle}
      </Heading>

      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipeListPage clickFn={setSelectedRecipe} />
        </>
      )}
    </Center>
  );
  */
};
