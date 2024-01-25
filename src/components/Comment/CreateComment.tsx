"use client";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Post } from "../../types/types";
import { FormEvent, useState } from "react";
import { addComment } from "../../service/actions";

const CreateComment = ({ post }: { post: Post }) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const postData = {
      content: comment,
      postId: post.id,
    };

    try {
      const comment = await addComment(postData);
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
        <InputRightElement onClick={handleSubmit}>
          <PlusSquareIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default CreateComment;
