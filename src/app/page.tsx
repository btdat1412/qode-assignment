import { Box, Center, Stack, StackDivider, VStack } from "@chakra-ui/react";
import UploadCard from "../components/UploadCard/UploadCard";
import PostCard from "../components/Post/PostCard";

export default function Home() {
  return (
    <Box bg="#f5f5f5" minH="100vh">
      <Center>
        <VStack
          w="500px"
          spacing="4"
          bg="#ffffff"
          p={4}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <UploadCard />
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing="4"
            align="stretch"
            w="100%"
            p={4}
          >
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
}
