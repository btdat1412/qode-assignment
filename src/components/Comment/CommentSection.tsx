"use client";

import { VStack } from "@chakra-ui/react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

const CommentSection = () => {
  return (
    <VStack align="stretch" w="100%" spacing={3}>
      <VStack
        align="stretch"
        w="100%"
        spacing={3}
        maxH="200"
        overflowY="scroll"
      >
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </VStack>
      <CreateComment />
    </VStack>
  );
};

export default CommentSection;
