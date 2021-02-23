import React, { Component, Fragment } from 'react'
import Footer from '../../components/context/Footer'
import Header from '../../components/context/Header'
export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Header home={true} />
        <article>
          <div className="banner_box">
            <div id="wrapper_index2" className="swiper-container">

              <ul className="swiper-wrapper" id="scroller_index2">

              </ul>
              <ul className="swiper-pagination"></ul>
            </div>
          </div>
          <div className="index_box">
            <h3></h3>
            <div className="menu_box">
              <a id="recharge">
                <em></em>
                <span>充值</span>
              </a>
              <a id="enchashment">
                <em></em>
                <span>取现</span>
              </a>
              <a id="thfund">
                <em></em>
                <span>晋金宝</span>
              </a>
              <a id="myAsset">
                <em></em>
                <span>我的资产</span>
              </a>
              <a id="liveFundList">
                <em></em>
                <span>活期理财</span>
              </a>
              <a id="inclusive">
                <em></em>
                <span>定期理财</span>
              </a>

              <a id="highEnd">
                <em></em>
                <span>高端理财</span>
              </a>
              <a id="inviteFriends">
                <em></em>
                <span>邀请好友</span>
              </a>
              <a id="yuanhui" style={{ display: 'none' }}>
                <em></em>
                <span>源晖专享</span>
              </a>
            </div>
          </div>
        </article>
        <Footer />
      </Fragment>
    )
  }
}
