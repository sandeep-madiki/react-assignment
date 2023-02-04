import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import './index.css'

import NxtContext from '../../context/context'
import {TTitle} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  //   console.log(publishedAt)
  const formattedTime = formatDistanceToNow(new Date(publishedAt))
  const index = formattedTime.indexOf(' ')
  const showTime = `${formattedTime.slice(index + 1)} ago`
  return (
    <NxtContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <li className="video-item-list-1">
              <img
                src={thumbnailUrl}
                className="thumbnail-img-1"
                alt="video thumbnail"
              />
              <div className="t-details-text">
                <TTitle dark={darkMode}>{title}</TTitle>
                <p className="t-channel">{channel}</p>
                <div className="views-date-con">
                  <p className="time">{viewCount}</p>
                  <BsDot size={25} className="dot" />
                  <p className="time">{showTime}</p>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoItem
