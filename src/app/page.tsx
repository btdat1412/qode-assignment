import { Box, Center, StackDivider, VStack } from "@chakra-ui/react";
import UploadCard from "../components/UploadCard/UploadCard";
import PostCard from "../components/Post/PostCard";
import { getPosts } from "../service/actions";

export default async function Home() {
  const posts = await getPosts();
  return (
    <Box bg="#f5f5f5" minH="100vh">
      <Center>
        <VStack w="500px" spacing="4" bg="#f5f5f5" p={4}>
          <UploadCard />
          <VStack spacing="4" align="stretch" w="100%">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
}
