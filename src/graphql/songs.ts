import gql from "graphql-tag";

interface IDataSongs {
  songs: ISongs[];
  song: ISongs;
}

interface ISongs {
  id: string;
  id_video: string;
  name: string;
  author: string;
  url_video: string;
  img_song_url: string;
}

const SONGS_QUERY = gql`
  query songs {
    songs {
      id
      id_video
      name
      author
      url_video
      img_song_url
    }
  }
`;

const SONG_QUERY = gql`
  query song($id: ID!) {
    song(id: $id) {
      id_video
      name
      author
      url_video
    }
  }
`;

export { SONGS_QUERY, SONG_QUERY };
export type { ISongs, IDataSongs };
