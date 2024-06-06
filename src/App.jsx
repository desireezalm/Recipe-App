import { Center, Heading, Stack } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const pageTitle = "The Recipe Collector";
  return (
    <Center bgColor="teal.100" flexDir="column">
      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <Stack alignItems="center">
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
            <RecipeListPage clickFn={setSelectedRecipe} />
          </Stack>
        </>
      )}
    </Center>
  );
};
