import { Text } from "@chakra-ui/react";

export const TextSection = ({ text }) => {
  return (
    <Text
      display="inline-block"
      fontWeight="medium"
      color="teal.700"
      fontSize={{ base: "sm", sm: "md" }}
      w={{ base: "40%", md: "40%" }}
      text={text}
    >
      {text}
    </Text>
  );
};
