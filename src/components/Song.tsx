import { ListItem, Image, Flex, Text, Stack, Heading } from "@chakra-ui/core";
import NextLink from "next/link";

const Song = ({ id, name, author, img_song_url }) => (
  <ListItem
    border="1px solid"
    borderColor="gray.200"
    borderRadius={4}
    my={2}
    bg="white"
  >
    <NextLink href={`/songs/[id]`} as={`/songs/${id}`} passHref>
      <Flex as="a">
        <Image
          size="100px"
          width="100px"
          height="100px"
          borderTopLeftRadius={4}
          borderBottomLeftRadius={4}
          objectFit="cover"
          src={img_song_url}
          alt={name}
          mr={4}
        />
        <Stack mt={4}>
          <Heading size="md" fontWeight="500">
            {name}
          </Heading>
          <Text color="gray.700">{author}</Text>
        </Stack>
      </Flex>
    </NextLink>
  </ListItem>
);

export default Song;
