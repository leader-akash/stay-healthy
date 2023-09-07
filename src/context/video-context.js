import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {

  const [videoData, setVideoData] = useState([]);
  const [searchedText, setSearchedText] = useState('');

  const getResult = async (val) => {

    try {
      const res = await axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${val}&numResults=8`);
      console.log('video', res?.data?.results);
      setVideoData(res?.data?.results)
    }
    catch (err) {
      console.log('video-err', err)
    }
  }

  const handleSearch = (e) => {
    setSearchedText(e.target.value);
    getResult(e.target.value)
  }

  return (
    <VideoContext.Provider value={{ getResult, videoData, searchedText, handleSearch }}>
      {children}
    </VideoContext.Provider>
  )
}

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo }