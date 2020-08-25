import { List, Heading } from "@chakra-ui/core";

import Song from "../components/Song";
import { SONGS_QUERY, IDataSongs } from "../graphql/songs";
import { useQuery } from "@apollo/react-hooks";

const App = () => {
  const { data, loading, error } = useQuery<IDataSongs>(SONGS_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Heading mt={14} mb={4} fontWeight="800">
        Best songs
      </Heading>

      {error ? (
        "Ocorreu um erro ao carregar songs"
      ) : (
        <List>
          {data.songs.map((song) => (
            <Song key={song.id_video} {...song} />
          ))}
        </List>
      )}
    </>
  );
};

export default App;
