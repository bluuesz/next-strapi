import { Box, Heading, Text, Button } from "@chakra-ui/core";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { SONG_QUERY, ISongs, IDataSongs } from "../../graphql/songs";
import { useQuery } from "@apollo/react-hooks";

const Song = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery<IDataSongs>(SONG_QUERY, {
    variables: { id: id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Box mt={8}>
      <Heading fontWeight="800">{data.song.name}</Heading>
      <Text color="grey.700" mb={4}>
        {data.song.author}
      </Text>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${data.song.id_video}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <NextLink href="/" passHref>
        <Button as="a" mt={4} leftIcon="arrow-back">
          Back
        </Button>
      </NextLink>
    </Box>
  );
};

export default Song;
