import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import './index.css'
import {TitleOne} from './styledComponents'
import NxtContext from '../../context/context'

const SavedVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, name, viewCount, publishedAt} = details
  const forTime = formatDistanceToNow(new Date(publishedAt))
  const startIndex = forTime.indexOf(' ') + 1
  const fTime = forTime.slice(startIndex)
  return (
    <NxtContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <li className="saved-item-con">
              <img className="s-img" src={thumbnailUrl} alt="video thumbnail" />
              <div className="s-details">
                <TitleOne dark={darkMode}>{title}</TitleOne>
                <p className="s-channel">{name}</p>
                <div className="time-con">
                  <p>{viewCount}</p>
                  <BsDot className="dot-1" size={24} />
                  <p>{`${fTime} ago`}</p>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedVideoItem
