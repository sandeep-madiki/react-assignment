import {Link} from 'react-router-dom'
import './index.css'
import {GTitle} from './styledComponents'

import NxtContext from '../../context/context'

const GamingVideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <NxtContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <li className="g-li-item">
            <Link to={`/videos/${id}`} className="link-item">
              <img className="g-img" src={thumbnailUrl} alt="video thumbnail" />
              <GTitle dark={darkMode}>{title}</GTitle>
              <p className="g-des">{`${viewCount} Watching Worldwide`}</p>
            </Link>
          </li>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default GamingVideoItem
