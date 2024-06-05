import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Input
    variant="outline"
    name="textInput"
    backgroundColor="teal.100"
    placeholder="Search"
    _placeholder={{ opacity: 1, color: "teal.400" }}
    color="teal.400"
    focusBorderColor="teal.300"
    borderColor="teal.400"
    borderRadius="10px"
    onChange={changeFn}
    {...props}
  />
);
