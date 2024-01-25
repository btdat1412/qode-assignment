"use client";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Post } from "../../types/types";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { addComment } from "../../service/actions";

const CreateComment = ({ post }: { post: Post }) => {
  const [comment, setComment] = useState("");

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
      await addComment(commentData);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          placeholder="Enter comment"
          value={comment}
          onChange={handleInputChange}
        />
        <InputRightElement>
          <button type="submit" aria-label="submit">
            <PlusSquareIcon color={"green.500"} />
          </button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default CreateComment;
