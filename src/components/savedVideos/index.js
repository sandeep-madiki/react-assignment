import {HiFire} from 'react-icons/hi'

import './index.css'
import Header from '../header'
import NxtContext from '../../context/context'
import SavedVideoItem from '../savedVideoItem'
import SideRoute from '../sideRoute'

import {
  SavedCon,
  SavedBanner,
  SavedIconCon,
  SavedVideosOne,
  NoSavedCon,
  NoSavedDes,
  NoSavedHeading,
} from './styledComponents'

const Banner = () => (
  <NxtContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <NoSavedCon dark={darkMode}>
          <img
            className="no-saved-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedHeading dark={darkMode}>No saved videos found</NoSavedHeading>
          <NoSavedDes dark={darkMode}>
            You can save your videos while watching them
          </NoSavedDes>
        </NoSavedCon>
      )
    }}
  </NxtContext.Consumer>
)

const SavedVideos = () => (
  <NxtContext.Consumer>
    {value => {
      const {darkMode, savedVideos} = value
      return (
        <div className="flexing">
          <SideRoute />
          <SavedCon dark={darkMode} data-testid="savedVideos">
            <Header />
            {savedVideos.length === 0 ? (
              Banner()
            ) : (
              <SavedBanner dark={darkMode} data-testid="banner">
                <SavedIconCon dark={darkMode}>
                  <HiFire size={30} />
                </SavedIconCon>
                <SavedVideosOne dark={darkMode}>Saved Videos</SavedVideosOne>
              </SavedBanner>
            )}
            {savedVideos.length !== 0 && (
              <ul className="saved-items-con">
                {savedVideos.map(each => (
                  <SavedVideoItem details={each} key={each.id} />
                ))}
              </ul>
            )}
          </SavedCon>
        </div>
      )
    }}
  </NxtContext.Consumer>
)

export default SavedVideos
