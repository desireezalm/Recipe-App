import { Center } from "@chakra-ui/react";
import { SearchBar } from "../components/SearchBar";
import { ShowRecipes } from "../components/ShowRecipes";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Center flexDir="column">
      <SearchBar />
      <ShowRecipes clickFn={clickFn} />
    </Center>
  );
};
