import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { Text } from "@chakra-ui/react";
//import { ShowRecipes } from "ShowRecipes";

export const SearchBar = () => {
  const [searchField, setSearchField] = useState("");

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
      <TextInput onChange={handleChange} w={225} mt={1} mb={8} />
    </>
  );
};
