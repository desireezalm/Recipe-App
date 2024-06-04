import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Text } from "@chakra-ui/react";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const recipeList = data.hits;

  const recipeMatches = recipeList.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <Text
        fontSize="1.1rem"
        as="em"
        fontWeight={500}
        color="teal.500"
        margin="0.5rem"
      >
        Search recipes:
      </Text>
      <TextInput onChange={handleChange} w={200} mb={8} />
    </>
  );
};
