import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import GamingVideoItem from '../gamingVideoItem'
import Header from '../header'
import './index.css'
import NxtContext from '../../context/context'
import SideRoute from '../sideRoute'

import {
  BannerBg,
  GIconCon,
  GamingText,
  GamingBg,
  NoVideosBg,
  NoSearchHeading,
} from './styledComponents'

const loaderConstraints = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Gaming extends Component {
  state = {gamingData: [], loaderStatus: loaderConstraints.initial}

  componentDidMount() {
    this.getGamingData()
  }

  noSearchRetry = () => {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({loaderStatus: loaderConstraints.progress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({loaderStatus: loaderConstraints.success})
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      // console.log(updatedData)
      this.setState({gamingData: updatedData})
    } else {
      this.setState({loaderStatus: loaderConstraints.failed})
    }
  }

  renderSuccessView = () => {
    const {gamingData} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <BannerBg dark={darkMode} data-testid="banner">
                <GIconCon>
                  <SiYoutubegaming size={25} className="t-icon" />
                </GIconCon>
                <GamingText dark={darkMode}>Gaming</GamingText>
              </BannerBg>
              <ul className="game-list-con">
                {gamingData.map(each => (
                  <GamingVideoItem details={each} key={each.id} />
                ))}
              </ul>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureViewOne = () => (
    <NxtContext.Consumer>
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
    </NxtContext.Consumer>
  )

  renderViews = () => {
    const {loaderStatus} = this.state
    switch (loaderStatus) {
      case loaderConstraints.progress:
        return this.renderLoader()
      case loaderConstraints.failed:
        return this.renderFailureViewOne()
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
                <GamingBg dark={darkMode} data-testid="gaming">
                  {this.renderViews()}
                </GamingBg>
              </div>
            </div>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
