import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Input
    variant="outline"
    backgroundColor="teal.100"
    placeholder="Search"
    _placeholder={{ opacity: 1, color: "teal.500" }}
    color="teal.500"
    focusBorderColor="teal.500"
    borderRadius="10px"
    onChange={changeFn}
    {...props}
  />
);
