import { Avatar, Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CommentSection from "../Comment/CommentSection";

const PostCard = () => {
  return (
    <Card w="100%" p={3}>
      <VStack spacing={3}>
        <VStack align="stretch" w="100%">
          <HStack>
            <Avatar src="https://bit.ly/broken-link" />
            <Text>UserName</Text>
          </HStack>
          <Text>Content</Text>
          <Image src="https://placehold.co/300" alt="Post Content" w="100%" />
        </VStack>
        <CommentSection />
      </VStack>
    </Card>
  );
};

export default PostCard;
