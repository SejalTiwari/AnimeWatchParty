import React from 'react'

export const MainContent = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
  return (
    <>
        <div className="anime-content">
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
              <h4>Rating:{rating}</h4>
                <h3>#Rank: {rank}</h3>
                <h3>#Score: {score}</h3>
                <h3>#Popularity: {popularity}</h3><hr/><br />
                <h4>Duration:{duration}</h4>
            </div>
        </div>
    </>
  )
}
