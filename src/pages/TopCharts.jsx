import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazemCore";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="loading songs" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-white text-3xl mt-4 mb-4">
        Discover Top Charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
