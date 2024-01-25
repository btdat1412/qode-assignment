import { Avatar, Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CommentSection from "../Comment/CommentSection";
import { Post } from "../../types/types";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card w="100%" p={3}>
      <VStack spacing={3}>
        <VStack align="stretch" w="100%">
          <HStack>
            <Avatar src="https://bit.ly/broken-link" />
            <Text>UserName</Text>
          </HStack>
          <Text>{post.title}</Text>
          <Image src={post.imageUrl} alt="Post Content" w="100%" />
        </VStack>
        <CommentSection post={post} />
      </VStack>
    </Card>
  );
};

export default PostCard;
