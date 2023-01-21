import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GrFormClose} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'

import VideoItem from '../videoItem'

import './index.css'

class Home extends Component {
  state = {showBanner: true, videosData: []}

  componentDidMount() {
    this.getApiCall()
  }

  getApiCall = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const searchVal = ''
    const homeUrl = `https://apis.ccbp.in/videos/all?search=${searchVal}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const responseHome = await fetch(homeUrl, options)
    const jsonData = await responseHome.json()
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
  }

  removeBanner = () => {
    this.setState({showBanner: false})
  }

  renderBanner = () => (
    <div className="banner-con">
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
      >
        <GrFormClose size={30} />
      </button>
    </div>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) <Redirect to="/login" />
    const {showBanner, videosData} = this.state
    return (
      <div className="home-test-bg">
        {showBanner && this.renderBanner()}
        <div className="home-main-bg">
          <div className="search-input-con">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
            />
            <div className="search-con">
              <BiSearch />
            </div>
          </div>
          <ul className="videos-list-con">
            {videosData.map(each => (
              <VideoItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
