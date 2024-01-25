import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

const Comment = () => {
  return (
    <HStack align={"left"}>
      <Avatar size="sm" src="https://bit.ly/broken-link" />
      <VStack align="left" spacing="1">
        <Text>UserName</Text>
        <Text>Content</Text>
      </VStack>
    </HStack>
  );
};

export default Comment;
