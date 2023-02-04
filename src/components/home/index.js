import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrFormClose} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'

import NxtWatchContext from '../../context/context'
import VideoItem from '../videoItem'
import Header from '../header'
import SideRoute from '../sideRoute'

import './index.css'

import {
  HomeBG,
  NoVideosBg,
  NoSearchHeading,
  BannerCon,
} from './styledComponents'

const loaderConstraints = {
  initial1: 'INITIALH',
  progress1: 'PROGRESSH',
  success1: 'SUCCESSH',
  failed1: 'FAILEDH',
}

class Home extends Component {
  state = {
    showBanner: true,
    videosData: [],
    searchVal: '',
    loaderStatus: loaderConstraints.initial1,
  }

  componentDidMount() {
    this.getApiCall()
  }

  searchUserVideos = event => {
    this.setState({searchVal: event.target.value})
  }

  onClickSearchButton = () => {
    this.getApiCall()
  }

  getApiCall = async () => {
    this.setState({loaderStatus: loaderConstraints.progress1})

    const {searchVal} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeUrl = `https://apis.ccbp.in/videos/all?search=${searchVal}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const responseHome = await fetch(homeUrl, options)
    const jsonData = await responseHome.json()
    if (responseHome.ok) {
      this.setState({loaderStatus: loaderConstraints.success1})
      const updatedData = jsonData.videos.map(data => ({
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        viewCount: data.view_count,
      }))
      this.setState({videosData: updatedData})
    } else {
      this.setState({loaderStatus: loaderConstraints.failed1})
    }
  }

  removeBanner = () => {
    this.setState({showBanner: false})
  }

  renderBanner = () => (
    <BannerCon className="banner-con" data-testid="banner">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
          className="channel-logo"
        />
        <p className="banner-des">
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
        <button className="banner-btn" type="button">
          GET IT NOW
        </button>
      </div>
      <button
        className="banner-remove-btn"
        onClick={this.removeBanner}
        type="button"
        data-testid="close"
      >
        <GrFormClose size={30} />
      </button>
    </BannerCon>
  )

  noSearchRetry = () => {
    this.getApiCall()
  }

  renderNoSearchResult = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <NoVideosBg dark={darkMode}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="no-videos-img"
            />
            <NoSearchHeading dark={darkMode}>
              No Search results found
            </NoSearchHeading>
            <p className="no-search-des">
              Try different key words or remove search filter
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

  renderSuccessViewOne = () => {
    const {videosData} = this.state
    const noResult = this.renderNoSearchResult()
    return videosData.length === 0 ? (
      noResult
    ) : (
      <ul className="videos-list-con">
        {videosData.map(each => (
          <VideoItem details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoaderOne = () => (
    <div className="loader-container-1" data-testid="loader">
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
            <img src={FImg} alt="failure view" className="no videos" />
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

  renderViewsOne = () => {
    const {loaderStatus} = this.state
    switch (loaderStatus) {
      case loaderConstraints.progress1:
        return this.renderLoaderOne()
      case loaderConstraints.failed1:
        return this.renderFailureViewOne()
      default:
        return this.renderSuccessViewOne()
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) <Redirect to="/login" />
    const {showBanner} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <div className="flexing">
              <SideRoute />
              <div className="home-test-bg">
                <Header />
                {showBanner && this.renderBanner()}
                <HomeBG dark={darkMode} data-testid="home">
                  <div className="search-input-con">
                    <input
                      type="search"
                      className="search-input"
                      placeholder="Search"
                      onChange={this.searchUserVideos}
                    />
                    <button
                      type="button"
                      className="search-con"
                      data-testid="searchButton"
                      onClick={this.onClickSearchButton}
                    >
                      <BiSearch />
                    </button>
                  </div>
                  {this.renderViewsOne()}
                </HomeBG>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
