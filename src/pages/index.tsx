import { List, Heading } from "@chakra-ui/core";

import Song from "../components/Song";
import { SONGS_QUERY, IDataSongs } from "../graphql/songs";
import { initializeApollo } from "../lib/apollo";

export const getStaticProps = async () => {
  const client = initializeApollo();

  const { data } = await client.query<IDataSongs>({
    query: SONGS_QUERY,
  });

  return {
    props: {
      songs: data.songs,
    },
  };
};

const App = ({ songs }: IDataSongs) => (
  <>
    <Heading mt={14} mb={4} fontWeight="800">
      Best songs
    </Heading>

    <List>
      {songs.map((song) => (
        <Song key={song.id_video} {...song} />
      ))}
    </List>
  </>
);

export default App;
