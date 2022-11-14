import React, { useEffect, useState } from "react";
import './App.css'
import { AnimeList } from "./components/AnimeList";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { RemoveWatchList } from "./components/RemoveWatchList";
import { WatchList } from "./components/WatchList";

function App() {
  const [search, setSearch] = useState("Anime");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };
  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="contain">
      <div className="SideNav">
        <div className="header">
          <h1>
            AnimeWatch<strong>Party.</strong>
          </h1>
        </div>
        <div className="search-box">
          <input
            className="input-search"
            type="search"
            placeholder="Search Here..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="watchListButton">
        <h2 className="text-heading">Watch List</h2>
        
          <div className="row sideRow">
            <AnimeList
            
              animelist={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveWatchList}
              handleList={(anime) => removeFrom(anime)}
            />
          </div>
         </div>
      </div>

      <div className="container">
        <div className="animeInfo">
          {animeInfo && <MainContent animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <div className="row">
            <AnimeList
              animelist={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={WatchList}
              handleList={(anime) => addTo(anime)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
