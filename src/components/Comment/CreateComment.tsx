"use client";
import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Post } from "../../types/types";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { addComment } from "../../service/actions";

const CreateComment = ({ post }: { post: Post }) => {
  const [comment, setComment] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const toast = useToast();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!comment || !comment.trim()) {
      return;
    }

    const commentData = {
      content: comment,
      postId: post.id,
    };

    try {
      setIsDisabled(true);
      await addComment(commentData);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: "Unable to add comment",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setComment("");
      setIsDisabled(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          placeholder="Enter comment"
          value={comment}
          onChange={handleInputChange}
          isDisabled={isDisabled}
        />
        <InputRightElement>
          <button type="submit" aria-label="submit" disabled={isDisabled}>
            <PlusSquareIcon color={"green.500"} />
          </button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default CreateComment;
