import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import './index.css'

import NxtWatchContext from '../../context/context'
import {HTitle} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = details
  //   console.log(publishedAt)
  const formattedTime = formatDistanceToNow(new Date(publishedAt))
  const index = formattedTime.indexOf(' ')
  const showTime = `${formattedTime.slice(index + 1)} ago`
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <li className="video-item-list">
            <Link to={`/videos/${id}`} className="link-item">
              <img
                src={thumbnailUrl}
                className="thumbnail-img"
                alt="video thumbnail"
              />
              <div className="video-details-con">
                <div className="profile-img-con">
                  <img
                    className="profile-img"
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                </div>
                <div className="details-text">
                  <HTitle dark={darkMode}>{title}</HTitle>
                  <div className="test-3">
                    <p className="name">{name}</p>
                    <div className="views-date-con">
                      <p className="time">{viewCount}</p>
                      <BsDot size={25} className="dot" />
                      <p className="time">{showTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
