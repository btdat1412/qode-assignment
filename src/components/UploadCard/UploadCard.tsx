"use client";
import { AttachmentIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const UploadCard = () => {
  return (
    <Card w="100%" p={3}>
      <VStack align="stretch" w='100%'> 
        <HStack>
          <Avatar src="https://bit.ly/broken-link" />
          <Text>UserName</Text>
        </HStack>
        <Textarea placeholder="Here is a sample placeholder" />
        <HStack justifyContent={"space-between"}>
          <IconButton aria-label="Search database" icon={<AttachmentIcon />} />
          <Button colorScheme="teal">Post</Button>
        </HStack>
      </VStack>
    </Card>
  );
};

export default UploadCard;
