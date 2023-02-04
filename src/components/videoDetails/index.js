import {Component} from 'react'
import Cookies from 'js-cookie'
// import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import NxtContext from '../../context/context'
import Header from '../header'
import SideRoute from '../sideRoute'
import './index.css'
import {
  DetailsCon,
  DetailsTitle,
  DetailsDes,
  LikeBtn,
  Like,
  ViewsDateCon,
  ViewsCount,
  SavedBtn,
} from './styledComponents'

const loaderConstraints = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class VideoDetails extends Component {
  state = {
    videoData: {},
    like: false,
    disLike: false,
    loaderStatus: loaderConstraints.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({loaderStatus: loaderConstraints.progress})
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
    if (response.ok) {
      this.setState({loaderStatus: loaderConstraints.success})
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
      // console.log(updatedData)
      this.setState({videoData: updatedData})
    }
  }

  addLike = () => {
    this.setState(prev => ({
      like: !prev.like,
      disLike: false,
    }))
  }

  toggleDisLike = () => {
    this.setState(prev => ({
      disLike: !prev.disLike,
      like: false,
    }))
  }

  renderLoader = () => (
    <div className="loader-container-3" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {videoData, like, disLike} = this.state
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
      <NxtContext.Consumer>
        {value => {
          const {darkMode, addSavedVideo, savedVideos} = value
          const addToSaved = () => {
            addSavedVideo(videoData)
          }
          const finding = savedVideos.find(each => each.id === id)
          const saveText = finding ? 'Saved' : 'Save'
          return (
            <div className="player-con-2">
              <ReactPlayer url={videoUrl} controls className="player-1" />
              <DetailsTitle dark={darkMode}>{title}</DetailsTitle>
              <div className="time-like-container">
                <ViewsDateCon className="views-date-con">
                  <ViewsCount dark={darkMode}>{viewCount}</ViewsCount>
                  <BsDot size={25} className="dot" />
                  <ViewsCount dark={darkMode}>{publishedAt}</ViewsCount>
                </ViewsDateCon>
                <div className="like-save-con">
                  <LikeBtn type="button" like={like} onClick={this.addLike}>
                    <BiLike size={22} />
                    <Like>Like</Like>
                  </LikeBtn>
                  <LikeBtn
                    type="button"
                    like={disLike}
                    onClick={this.toggleDisLike}
                  >
                    <BiDislike size={22} />
                    <Like>Dislike</Like>
                  </LikeBtn>
                  <SavedBtn type="button" onClick={addToSaved} save={finding}>
                    <BiListPlus size={22} />
                    <Like>{saveText}</Like>
                  </SavedBtn>
                </div>
              </div>
              <div className="profile-container-1">
                <img
                  className="profile-img-1"
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <div>
                    <DetailsTitle dark={darkMode}>{name}</DetailsTitle>
                    <ViewsCount dark={darkMode}>{subscriberCount}</ViewsCount>
                  </div>
                  <DetailsDes dark={darkMode}>{description}</DetailsDes>
                </div>
              </div>
            </div>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderViews = () => {
    const {loaderStatus} = this.state
    switch (loaderStatus) {
      case loaderConstraints.progress:
        return this.renderLoader()
      default:
        return this.renderSuccessView()
    }
  }

  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <div className="flexing">
              <SideRoute />
              <div className="new-con">
                <Header />
                <DetailsCon dark={darkMode} data-testid="videoItemDetails">
                  {this.renderViews()}
                </DetailsCon>
              </div>
            </div>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default VideoDetails
