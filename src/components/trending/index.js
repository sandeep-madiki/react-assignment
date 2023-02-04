import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'

import TrendingVideoItem from '../trendingVideoItem'
import Header from '../header'
import NxtWatchContext from '../../context/context'
import SideRoute from '../sideRoute'

import './index.css'
import {
  TListCon,
  TrendingBg,
  BannerBg,
  TIconCon,
  TrendingText,
  NoVideosBg,
  NoSearchHeading,
} from './styledComponents'

const loaderConstraints = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Trending extends Component {
  state = {videosData: [], loaderStatus: loaderConstraints.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({loaderStatus: loaderConstraints.initial})
    const jwtToken = Cookies.get('jwt_token')
    const dataUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(dataUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({loaderStatus: loaderConstraints.success})
      const updatedData = data.videos.map(each => ({
        channel: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({videosData: updatedData})
    } else {
      this.setState({loaderStatus: loaderConstraints.failed})
    }
  }

  noSearchRetry = () => {
    this.getTrendingData()
  }

  renderSuccessView = () => {
    const {videosData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <BannerBg dark={darkMode} data-testid="banner">
                <TIconCon dark={darkMode}>
                  <AiFillFire size={25} className="t-icon" />
                </TIconCon>
                <TrendingText dark={darkMode}>Trending</TrendingText>
              </BannerBg>
              <TListCon>
                {videosData.map(each => (
                  <TrendingVideoItem details={each} key={each.id} />
                ))}
              </TListCon>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureViewOne = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        const FLightImg =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const FDarkImg =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        const FImg = darkMode ? FDarkImg : FLightImg
        return (
          <NoVideosBg dark={darkMode}>
            <img src={FImg} alt="failure view" className="failure view" />
            <NoSearchHeading dark={darkMode}>
              Oops! Something Went Wrong
            </NoSearchHeading>
            <p className="no-search-des">
              We are having some trouble to complete your request. <br /> Please
              try again.
            </p>
            <button
              className="no-search-retry-btn"
              type="button"
              onClick={this.noSearchRetry}
            >
              Retry
            </button>
          </NoVideosBg>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderViews = () => {
    const {loaderStatus} = this.state
    switch (loaderStatus) {
      case loaderConstraints.initial:
        return this.renderLoader()
      case loaderConstraints.failed:
        return this.renderFailureViewOne()
      default:
        return this.renderSuccessView()
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <div className="flexing">
              <SideRoute />
              <div className="new-con">
                <Header />
                <TrendingBg dark={darkMode} data-testid="trending">
                  {this.renderViews()}
                </TrendingBg>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
