"use client";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const CreateComment = () => {
  return (
    <InputGroup>
      <Input placeholder="Enter comment" />
      <InputRightElement>
        <PlusSquareIcon color="green.500" />
      </InputRightElement>
    </InputGroup>
  );
};

export default CreateComment;
