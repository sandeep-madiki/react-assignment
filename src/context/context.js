import React from 'react'

const NxtWatchContext = React.createContext({
  darkMode: true,
  changeTheme: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
})

export default NxtWatchContext
