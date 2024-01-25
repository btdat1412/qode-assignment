import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import { Comment } from "../../types/types";

const Comment = ({ comment }: { comment: Comment }) => {
  return (
    <HStack align={"left"}>
      <Avatar size="sm" src="https://bit.ly/broken-link" />
      <VStack align="left" spacing="1">
        <Text>UserName</Text>
        <Text>{comment.content}</Text>
      </VStack>
    </HStack>
  );
};

export default Comment;
