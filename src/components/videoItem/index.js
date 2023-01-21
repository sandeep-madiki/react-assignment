import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import './index.css'
// const vv = {id, name, profileImageUrl, publishedAt, thumbnailUrl, title, viewCount}

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
  console.log(publishedAt)
  const formattedTime = formatDistanceToNow(new Date(publishedAt))
  const index = formattedTime.indexOf(' ')
  const showTime = `${formattedTime.slice(index + 1)} ago`
  return (
    <li className="video-item-list">
      <Link to={`/videos/${id}`} className="link-item">
        <img src={thumbnailUrl} className="thumbnail-img" alt={name} />
        <div className="video-details-con">
          <div className="profile-img-con">
            <img className="profile-img" src={profileImageUrl} alt={id} />
          </div>
          <div className="details-text">
            <p className="title">{title}</p>
            <p className="name">{name}</p>
            <div className="views-date-con">
              <p className="time">{viewCount}</p>
              <BsDot size={25} className="dot" />
              <p className="time">{showTime}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default VideoItem
