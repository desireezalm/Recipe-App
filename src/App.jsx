import { Center, Heading } from "@chakra-ui/react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const pageTitle = "Welcome to the Recipe Hoarder";
  return (
    <Center>
      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="teal.600">
            {pageTitle}
          </Heading>

          <RecipeListPage clickFn={setSelectedRecipe} />
        </>
      )}
    </Center>
  );
};
