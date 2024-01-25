"use client";
import { AttachmentIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { addPost } from "../../service/actions";
import { getSignedURL } from "../../service/s3";

const UploadCard = () => {
  const [title, setTitleValue] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const computeSHA256 = async (file: File) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  const handleFileUpload = async (file: File) => {
    const signedURLResult = await getSignedURL({
      fileSize: file.size,
      fileType: file.type,
      checksum: await computeSHA256(file),
    });
    if (signedURLResult.failure !== undefined) {
      throw new Error(signedURLResult.failure);
    }
    const { url } = signedURLResult.success;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });
    const fileUrl = url.split("?")[0];

    return fileUrl;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFile(file);

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleFileClear = () => {
    setFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleInputChange = (e: any) => {
    setTitleValue(e.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      let postData;

      if (file) {
        const fileUrl = await handleFileUpload(file);
        postData = {
          title: title,
          imageUrl: fileUrl,
        };
      }
      const post = await addPost(postData);
      setTitleValue("");
      setFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card w="100%" p={3}>
      <form onSubmit={handleSubmit}>
        <VStack align="stretch" w="100%" spacing={3}>
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
          <Input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          {previewUrl && (
            <Box position="relative">
              <Image src={previewUrl} alt="Preview" width="100%" />
              <IconButton
                aria-label="Remove Preview Image"
                icon={<CloseIcon />}
                onClick={handleFileClear}
                position="absolute"
                top="0"
                right="0"
              />
            </Box>
          )}
          <HStack justifyContent={"space-between"}>
            <IconButton
              aria-label="Post"
              icon={<AttachmentIcon />}
              onClick={handleFileButtonClick}
            />
            <Button colorScheme="teal" type="submit">
              Post
            </Button>
          </HStack>
        </VStack>
      </form>
    </Card>
  );
};

export default UploadCard;
