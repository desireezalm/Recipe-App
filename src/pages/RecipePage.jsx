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
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { TagItem } from "../components/ui/TagItem";
import { Button } from "../components/ui/Button";
import {
  TextSectionBold,
  TextSectionLight,
  TextSectionNormal,
} from "../components/TextSection";

export const RecipePage = ({ item, clickFn }) => {
  const nutrientArray = [
    item.totalNutrients.ENERC_KCAL,
    item.totalNutrients.PROCNT,
    item.totalNutrients.FAT,
    item.totalNutrients.CHOCDF,
    item.totalNutrients.CHOLE,
    item.totalNutrients.NA,
  ];

  return (
    <Center bgColor="teal.100" flexDirection="column" color="teal.700" w="full">
      <Card borderRadius="xl" w={{ base: "100vw", md: "90vw" }} h="fit-content">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          w={{ base: "100vw", md: "90vw" }}
          lineHeight={2}
        >
          <Image
            src={item.image}
            w={{ base: "100vw", md: "50vw" }}
            borderTopRadius="xl"
            borderBottomRadius={{ base: 0, md: "xl" }}
            objectFit="cover"
            display="inline-block"
          />
          <CardBody h="fit-content">
            <Center>
              <Grid
                w={{ base: "90vw", md: "80vw" }}
                mt="3"
                gap={{ base: 4, md: 8 }}
                templateColumns={{ base: "90vw", md: "40%" }}
                templateRows={{
                  base: "1.5rem 2rem repeat(3, fit-content)",
                  md: "2rem 2rem repeat(2, fit-content)",
                }}
                h="fit-content"
                margin="auto"
              >
                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 2 }}
                  colStart={1}
                  colEnd={{ base: 1, md: 2 }}
                  rowStart={1}
                  margin="auto"
                >
                  <Text
                    color="white"
                    fontSize={{ base: "md", md: "lg" }}
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
                </GridItem>
                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 2 }}
                  colStart={1}
                  rowStart={2}
                  margin="auto"
                >
                  <Heading
                    fontWeight="bold"
                    color="teal.700"
                    fontSize={{ base: "md", sm: "xl", md: "3xl" }}
                  >
                    {item.label}
                  </Heading>
                </GridItem>

                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 1 }}
                  colStart={1}
                  colEnd={1}
                  rowStart={3}
                >
                  <Box>
                    <TextSectionBold text={"Dish: "} />{" "}
                    <TextSectionLight fontWeight="light" text={item.dishType} />
                  </Box>
                  <Box>
                    <TextSectionBold text={"Servings: "} />{" "}
                    <TextSectionLight text={item.yield} />
                  </Box>
                  <Box>
                    <TextSectionBold text={"Cooking time: "} />{" "}
                    <TextSectionLight text={item.totalTime + " minutes"} />
                  </Box>

                  <Flex alignItems="start" lineHeight={1} paddingTop="0.9rem">
                    <TextSectionBold text={"Nutrients: "} />{" "}
                    <Stack display="inline-block" paddingLeft="0.25rem">
                      {nutrientArray.map((nutrient) => (
                        <Flex
                          flexDirection="row"
                          key={nutrient.label}
                          gap={1}
                          wrap="nowrap"
                          lineHeight={1.5}
                        >
                          <Text
                            display="inline-block"
                            fontSize={{ base: "sm", md: "md" }}
                            color="teal.700"
                            fontWeight="medium"
                          >
                            {nutrient.label}:{" "}
                          </Text>
                          <TextSectionLight
                            text={
                              nutrient.quantity.toFixed(2) + " " + nutrient.unit
                            }
                          />
                        </Flex>
                      ))}
                    </Stack>
                  </Flex>
                </GridItem>
                <GridItem h={{ base: "fit-content", md: "15rem" }}>
                  <Stack
                    paddingTop="2rem"
                    paddingBottom="2rem"
                    w={{ base: "90vw", md: "75%" }}
                    display="inline-block"
                  >
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
                              maxHeight={{ base: "16rem", md: "20rem" }}
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
                </GridItem>

                <GridItem
                  h="fit-content"
                  colSpan={{ base: 1, md: 2 }}
                  colStart={1}
                  rowStart={5}
                  rowEnd={5}
                >
                  <Flex
                    flexDirection="column"
                    color="teal.700"
                    marginBottom="1.5rem"
                  >
                    <TextSectionBold text={"Ingredients: "} />{" "}
                    {item.ingredientLines.map((ingredient) => (
                      <TextSectionNormal text={ingredient} key={ingredient} />
                    ))}
                  </Flex>
                </GridItem>
              </Grid>
            </Center>
            <Button clickFn={clickFn} text={"Return to recipe overview"} />
          </CardBody>
        </Flex>
      </Card>
    </Center>
  );
};
