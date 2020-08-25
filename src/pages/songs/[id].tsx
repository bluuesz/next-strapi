import { Box, Heading, Text, Button } from "@chakra-ui/core";
import NextLink from "next/link";
import { SONG_QUERY, IDataSongs, SONGS_QUERY } from "../../graphql/songs";
import { initializeApollo } from "../../lib/apollo";

export const getStaticProps = async ({ params }) => {
  const id: string = params.id;

  const client = initializeApollo();

  const response = await client.query<IDataSongs>({
    query: SONG_QUERY,
    variables: { id: id },
  });

  return {
    props: {
      song: response.data.song,
    },
  };
};

export const getStaticPaths = async () => {
  const client = initializeApollo();

  const { data } = await client.query<IDataSongs>({ query: SONGS_QUERY });
  return {
    paths: data.songs.map(({ id }) => ({
      params: { id },
    })),
    fallback: false,
  };
};

const SongTarget = ({ song }: IDataSongs) => (
  <Box mt={8}>
    <Heading fontWeight="800">{song.name}</Heading>
    <Text color="grey.700" mb={4}>
      {song.author}
    </Text>
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${song.id_video}`}
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

export default SongTarget;
