import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  z-index:1;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    background: #eee;
    text-aline: center;

    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 38px;
  box-sizeing: border-box;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  border: none;
  color: #666;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 220px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 220px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 15px;
  width: 220px;
  padding: 0px 24px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background:#fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top : 20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoList = styled.div`
  overflow:hidden;
`

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding: 0 5px;
  margin-right:10px;
  margin-bottom:10px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  cursor:pointer;
  font-size:13px;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;

  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
