// YouTubePlayer.js
import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: "1024",
    width: "1024",
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
