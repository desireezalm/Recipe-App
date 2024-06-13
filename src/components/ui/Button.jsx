import { Button as GenericButton } from "@chakra-ui/react";

import { ArrowLeftIcon } from "@chakra-ui/icons";

export const Button = ({ clickFn, text }) => {
  return (
    <GenericButton
      onClick={clickFn}
      color="white"
      bgColor="teal.200"
      text={text}
      w={{ base: "90vw", md: "fit-content" }}
      padding="1rem"
      mt={14}
      fontWeight="light"
      fontSize={{ base: "sm", md: "md" }}
      letterSpacing="widest"
      _hover={{ bgColor: "teal.300", cursor: "pointer" }}
      _active={{
        transform: "scale(0.98)",
        borderColor: "white",
        borderWidth: "0.1rem",
      }}
    >
      <ArrowLeftIcon marginRight="1rem" /> {text}
    </GenericButton>
  );
};
