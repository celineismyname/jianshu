import { combineReducers } from "redux-immutable";
import {reducer as headerReducer} from "../common/header/store";
import {reducer as homeReducer}from "../pages/home/store";
import {reducer as detailReducer}from "../pages/detail/store";
import {reducer as loginlReducer}from "../pages/login/store";
//redux-immutable

const reducer = combineReducers({
  header:headerReducer,
  home:homeReducer,
  detail:detailReducer,
  login:loginlReducer
})


export default reducer