import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header/index";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from './pages/login'
import Write from './pages/write'
import store from "./store";

import { GlobalStyle } from "./style";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/**provider里面所有的都有能力使用store的数据 */}
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route>
            </div>
          </BrowserRouter>
          <GlobalStyle />
        </Provider>
      </div>
    );
  }
}

export default App;
