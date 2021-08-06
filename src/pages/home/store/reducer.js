import * as constants from "./constants";
import { fromJS } from "immutable";
import crown from "../../../statics/crown.png";
import days from "../../../statics/days.png";
import dimand from "../../../statics/dimand.png";
import ping from "../../../statics/ping.png";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage:1,
  showScroll:false,
  recommendList: [
    {
      id: 1,
      title: "日更挑战",
      imgUrl: days,
      bgColor: "#b7d3ec",
      fontColor: "#36a0b6",
    },
    {
      id: 2,
      title: "简书会员",
      imgUrl: crown,
      bgColor: "#ffb84f",
      fontColor: "#ffefd9",
    },
    {
      id: 3,
      title: "优选连载",
      imgUrl: dimand,
      bgColor: "#f4e0bd",
      fontColor: "#c89e51",
    },
    {
      id: 4,
      title: "简书版权",
      imgUrl: ping,
      bgColor: "#c1e4de",
      fontColor: "#5a948c",
    },
  ],

});

const Todo = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
      })
      case constants.ADD_ARTICLE_LIST:
        return state.merge({
          articleList:state.get('articleList').concat(action.list),
          articlePage:action.nextPage
        })
        case constants.CHANGE_SHOW_SCROLL:
          return state.set('showScroll',action.show)
    default:
      return state;
  }
};

export default Todo;
