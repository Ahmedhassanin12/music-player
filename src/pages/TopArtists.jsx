import { useEffect } from "react";
import axios from "axios";

import { ArtistCard, Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazemCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="loading songs" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-white text-3xl mt-4 mb-4">Top Artist</h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;

// export default TopArtists;
