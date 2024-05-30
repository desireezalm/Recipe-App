import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { TagItem } from "./ui/TagItem";

export const PortfolioItemCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      cursor="pointer"
      w="15rem"
      h="fit-content"
      onClick={() => clickFn(item)}
      _hover={{ bgColor: "pink.200" }}
    >
      <CardBody>
        <Image w="sm" h={48} src={item.imageUrl} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading fontSize={{ base: "sm", sm: "md" }}>{item.title}</Heading>
          <Text fontSize={{ base: "sm", sm: "md" }}>{item.summary}</Text>
          <Spacer />
          <Flex gap={2} wrap="wrap">
            {item.skills.map((skill) => (
              <TagItem key={skill}>{skill}</TagItem>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
