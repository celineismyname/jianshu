import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight ,BackTop } from "./style";
import { actionCreators } from "./store";

class Home extends Component {
  handleScrollTop( ){
    window.scrollTo(0,0)
  }
  state={
    data:1
  }
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              alt="首页"
              src="http://img62.ddimg.cn/upload_img/00838/cxtc/750x315_wzh_20210720-1626932213.jpg"
            ></img>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend data={this.state.data} />
            <Writer />
          </HomeRight>
          {
            this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
          }
        </HomeWrapper>
      </div>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state )=>({
  showScroll:state.getIn(["home","showScroll"])
})

const mapDisPatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(e){
    document.documentElement.scrollTop>400?dispatch(actionCreators.changeShowScroll(true)):dispatch(actionCreators.changeShowScroll(false))
  }
});

export default connect(mapState, mapDisPatch)(Home);
