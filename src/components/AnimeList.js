import React from "react";

export const AnimeList = ({
  animelist,
  setAnimeInfo,
  animeComponent,
  handleList,
}) => {
  const WatchList = animeComponent;
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div
                className="card"
                key={index}
                // onClick={() => setAnimeInfo(anime)}
              >
                <a href={anime.url}><img src={anime.images.jpg.large_image_url} alt="animeImage" /></a>
                <a href={anime.url}><h4>{anime.title}</h4></a>
                <div className="anime-info">
                <div className="hover-text">Hover me</div>
                  <div className="overlay" onClick={() => handleList(anime)}>
                    
                    <h4 className="animeTitle">Title: {anime.title_japanese}</h4>
                    <h4 className="animeRank">Rank: {anime.rank}</h4>
                  <h4 className="animeRating">Rating:{anime.rating}</h4>
                  <h3 className="animePopularity">Popularity: {anime.popularity}</h3><hr/><br />
                    <WatchList />
                  </div>
                </div>
              </div>
            );
          })
        : "Wait for a while.."}
    </>
  );
};
