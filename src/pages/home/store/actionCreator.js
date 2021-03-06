import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage: nextPage,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

export const changeShowScroll = (show) =>({
    type: constants.CHANGE_SHOW_SCROLL,
    show: show
})