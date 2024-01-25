"use client";

import { VStack } from "@chakra-ui/react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { Post } from "../../types/types";

const CommentSection = ({ post }: { post: Post }) => {
  return (
    <VStack align="stretch" w="100%" spacing={3}>
      <VStack
        align="stretch"
        w="100%"
        spacing={3}
        maxH="200"
        overflowY="scroll"
      >
        {post.comment.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </VStack>
      <CreateComment post = {post}/>
    </VStack>
  );
};

export default CommentSection;
