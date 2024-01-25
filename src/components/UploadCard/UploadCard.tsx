"use client";
import { AttachmentIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Card,
  HStack,
  IconButton,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { addPost } from "../../service/actions";

const UploadCard = () => {
  const [title, setTitleValue] = useState("");

  const handleInputChange = (e: any) => {
    setTitleValue(e.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log(title);

    const postData = {
      title: title,
      imageUrl: "https://placehold.co/300",
    };

    try {
      const post = await addPost(postData);
      setTitleValue("");
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card w="100%" p={3}>
      <VStack align="stretch" w="100%">
        <form onSubmit={handleSubmit}>
          <HStack>
            <Avatar src="https://bit.ly/broken-link" />
            <Text>UserName</Text>
          </HStack>
          <Textarea
            value={title}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
          <HStack justifyContent={"space-between"}>
            <IconButton
              aria-label="Search database"
              icon={<AttachmentIcon />}
            />
            <Button colorScheme="teal" type="submit">
              Post
            </Button>
          </HStack>
        </form>
      </VStack>
    </Card>
  );
};

export default UploadCard;
