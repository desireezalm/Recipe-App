import { Center } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Center flexDir="column">
      <RecipeSearch clickFn={clickFn} />
    </Center>
  );
};
