import {
  Center,
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  Heading,
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { TagItem } from "../components/ui/TagItem";

export const RecipePage = ({ item }) => {
  // Total nutrients array > cropped versie maken
  // button "return to recipe overview"

  const nutrientArray = [
    item.totalNutrients.ENERC_KCAL,
    item.totalNutrients.PROCNT,
    item.totalNutrients.FAT,
    item.totalNutrients.CHOCDF,
    item.totalNutrients.CHOLE,
    item.totalNutrients.NA,
  ];

  return (
    <Center bgColor="teal.100" flexDirection="column" color="teal.700">
      <Card borderRadius="xl" w={{ base: "100vw", md: "80vw" }} h="fit-content">
        <Image
          src={item.image}
          w={{ base: "100vw", md: "50vw" }}
          borderTopRadius="xl"
          objectFit="cover"
        />
        <CardBody>
          <Stack mt="3" spacing="2">
            <Text
              color="white"
              fontSize={{ base: "md", sm: "lg" }}
              textAlign="center"
              alignSelf="center"
              fontWeight="light"
              letterSpacing="widest"
              bgColor="teal.200"
              borderRadius="1rem"
              paddingX="0.7rem"
              paddingY="0.1rem"
              w="fit-content"
            >
              {item.mealType}
            </Text>
            <Heading
              fontWeight="bold"
              color="teal.700"
              fontSize={{ base: "md", sm: "lg" }}
            >
              {item.label}
            </Heading>
            <Box>
              <Text
                display="inline-block"
                fontWeight="medium"
                color="teal.700"
                fontSize={{ base: "sm", sm: "md" }}
                w="40%"
              >
                Dish:{" "}
              </Text>{" "}
              <Text
                display="inline-block"
                fontSize={{ base: "sm", sm: "md" }}
                color="teal.700"
                fontWeight="light"
              >
                {item.dishType}
              </Text>
            </Box>
            <Box>
              <Text
                display="inline-block"
                fontWeight="medium"
                color="teal.700"
                fontSize={{ base: "sm", sm: "md" }}
                w="40%"
              >
                Servings:{" "}
              </Text>{" "}
              <Text
                display="inline-block"
                fontSize={{ base: "sm", sm: "md" }}
                color="teal.700"
                fontWeight="light"
              >
                {item.yield}
              </Text>
            </Box>
            <Box>
              <Text
                display="inline-block"
                fontWeight="medium"
                color="teal.700"
                fontSize={{ base: "sm", sm: "md" }}
                w="40%"
              >
                Cooking time:{" "}
              </Text>{" "}
              <Text
                display="inline-block"
                fontSize={{ base: "sm", sm: "md" }}
                color="teal.700"
                fontWeight="light"
              >
                {item.totalTime} minutes
              </Text>
            </Box>

            <Flex alignItems="start" lineHeight={1}>
              <Text
                display="inline-block"
                fontWeight="medium"
                color="teal.700"
                fontSize={{ base: "sm", sm: "md" }}
                w="40%"
              >
                Nutrients:{" "}
              </Text>{" "}
              <Stack display="inline-block" paddingLeft="0.25rem">
                {nutrientArray.map((nutrient) => (
                  <Flex
                    flexDirection="row"
                    key={nutrient.label}
                    gap={1}
                    wrap="nowrap"
                  >
                    <Text
                      display="inline-block"
                      fontSize={{ base: "sm", md: "md" }}
                      color="teal.700"
                      fontWeight="light"
                    >
                      {nutrient.label}:{" "}
                    </Text>
                    <Text
                      display="inline-block"
                      fontSize={{ base: "sm", md: "md" }}
                      color="teal.700"
                      fontWeight="light"
                    >
                      {" "}
                      {nutrient.quantity.toFixed(2)} {nutrient.unit}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Flex>

            <Stack paddingTop="2rem" paddingBottom="2rem">
              {item.healthLabels.length > 0 && (
                <Accordion allowToggle>
                  <AccordionItem borderColor="teal.200">
                    <Box>
                      <AccordionButton>
                        <Text
                          fontWeight="medium"
                          color="teal.700"
                          fontSize={{ base: "sm", sm: "md" }}
                          textAlign="left"
                          flex="1"
                        >
                          Health information
                        </Text>
                        <AccordionIcon />
                      </AccordionButton>
                    </Box>
                    <AccordionPanel pb={1}>
                      <Flex
                        flexDirection="column"
                        wrap="wrap"
                        maxHeight="12rem"
                      >
                        {item.healthLabels.map((label) => (
                          <TagItem
                            key={label}
                            fontWeight="light"
                            fontSize={{ base: "sm", sm: "md" }}
                          >
                            {label}
                          </TagItem>
                        ))}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
              {item.dietLabels.length > 0 && (
                <Accordion allowToggle>
                  <AccordionItem borderColor="teal.200">
                    <Box>
                      <AccordionButton>
                        <Text
                          fontWeight="medium"
                          color="teal.700"
                          fontSize={{ base: "sm", sm: "md" }}
                          textAlign="left"
                          flex="1"
                        >
                          Dietary information
                        </Text>
                        <AccordionIcon />
                      </AccordionButton>
                    </Box>
                    <AccordionPanel pb={1}>
                      <Flex
                        flexDirection="column"
                        wrap="wrap"
                        maxHeight="12rem"
                      >
                        {item.dietLabels.map((dietLabel) => (
                          <TagItem
                            key={dietLabel}
                            fontWeight="light"
                            fontSize={{ base: "sm", sm: "md" }}
                          >
                            {dietLabel}
                          </TagItem>
                        ))}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
              {item.cautions.length > 0 && (
                <Accordion allowToggle>
                  <AccordionItem borderColor="teal.200">
                    <Box>
                      <AccordionButton>
                        <Text
                          fontWeight="medium"
                          color="teal.700"
                          fontSize={{ base: "sm", sm: "md" }}
                          textAlign="left"
                          flex="1"
                        >
                          Cautions
                        </Text>
                        <AccordionIcon />
                      </AccordionButton>
                    </Box>
                    <AccordionPanel pb={1}>
                      <Flex
                        flexDirection="column"
                        wrap="wrap"
                        maxHeight="12rem"
                      >
                        {item.cautions.map((caution) => (
                          <TagItem
                            key={caution}
                            fontWeight="light"
                            fontSize={{ base: "sm", sm: "md" }}
                          >
                            {caution}
                          </TagItem>
                        ))}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </Stack>

            <Flex flexDirection="column" color="teal.700">
              <Text
                fontWeight="medium"
                fontSize={{ base: "sm", sm: "md" }}
                textAlign="left"
              >
                Ingredients:{" "}
              </Text>
              {item.ingredientLines.map((ingredient) => (
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  key={ingredient}
                  color="teal.700"
                >
                  {ingredient}
                </Text>
              ))}
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
