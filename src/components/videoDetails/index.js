import {Component} from 'react'
import Cookies from 'js-cookie'
// import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../header'
import './index.css'

class VideoDetails extends Component {
  state = {videoData: {}}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoUrl, options)
    const data = await response.json()
    // console.log(data)

    const updatedData = {
      name: data.video_details.channel.name,
      profileImageUrl: data.video_details.channel.profile_image_url,
      subscriberCount: data.video_details.channel.subscriber_count,
      description: data.video_details.description,
      id: data.video_details.id,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
    }
    console.log(updatedData)
    this.setState({videoData: updatedData})
  }

  render() {
    const {videoData} = this.state
    const {
      videoUrl,
      title,
      publishedAt,
      viewCount,
      profileImageUrl,
      id,
      name,
      subscriberCount,
      description,
    } = videoData
    return (
      <div className="new-con">
        <Header />
        <div className="player-con">
          <div className="player-con-2">
            <ReactPlayer url={videoUrl} controls className="player" />
            <p className="title">{title}</p>
            <div className="time-like-container">
              <div className="views-date-con">
                <p className="time">{viewCount}</p>
                <BsDot size={25} className="dot" />
                <p className="time">{publishedAt}</p>
              </div>
              <ul className="like-save-con">
                <li className="like-con">
                  <BiLike className="time-1" />
                  <p className="time-1">Like</p>
                </li>
                <li className="like-con">
                  <BiDislike className="time-1" />
                  <p className="time-1">Dislike</p>
                </li>
                <li className="like-con">
                  <BiListPlus className="time-1" />
                  <p className="time-1">Save</p>
                </li>
              </ul>
            </div>
            <div className="profile-container-1">
              <img className="profile-img-1" src={profileImageUrl} alt={id} />
              <div>
                <div>
                  <p className="name">{name}</p>
                  <p className="name">{subscriberCount}</p>
                </div>
                <p className="name">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoDetails
