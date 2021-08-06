import React, { Component } from "react";
//与store做连接
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper,
} from "./style";

class Header extends Component {
  getListArea = () => {
    const pageList = [];
    const newList = this.props.list.toJS();
    for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
      if (newList[i]) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() =>
                this.props.handleChangePage(
                  this.props.page,
                  this.props.totalPage
                )
              }
            >
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>

        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {this.props.login ? (
            <NavItem onClick={this.props.logout} className="right">退出</NavItem>
          ) : (
            <Link to="/login">
            <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>

            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>
              &#xe62d;
            </i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe602;</i>
              写文章
            </Button>          
          </Link>

          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

/**
 * 当引入组件里的数据移除放到了redux这个公共的数据存储框架中后，Header变成了无状态组件，因为它只有render函数,好处是性能比较高
 */

// const Header = (props) => {
//   return (

//   );
// };

/**
 * 这个组件和store做连接的时候，store里的数据如何映射到props上
 */
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    list: state.getIn(["header", "list"]),
    totalPage: state.getIn(["header", "totalPage"]),
    page: state.getIn(["header", "page"]),
    login: state.getIn(["login", "login"]),
  };
};

/**
 * 这个组件和store做连接的时候，组件要改变store的内容
 */
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      dispatch(actionCreators.searchFocus());
      list.size === 0 && dispatch(actionCreators.getList());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    onMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      page < totalPage
        ? dispatch(actionCreators.changePage(page + 1))
        : dispatch(actionCreators.changePage(1));
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
