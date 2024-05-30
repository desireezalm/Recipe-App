import { Tag } from "@chakra-ui/react";

export const TagItem = ({ children, ...props }) => {
  return (
    <Tag
      p={2}
      size="sm"
      variant="solid"
      bgColor="teal.300"
      color="white"
      {...props}
    >
      {children}
    </Tag>
  );
};
