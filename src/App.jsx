import { Center, Heading, Stack } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const pageTitle = "Recipe Hoarder";
  return (
    <Center bgColor="teal.100" flexDir="column">
      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <Stack alignItems="center">
            <Heading size="xl" mb={8} color="teal.600">
              {pageTitle}
            </Heading>
            <RecipeListPage clickFn={setSelectedRecipe} />
          </Stack>
        </>
      )}
    </Center>
  );
};
