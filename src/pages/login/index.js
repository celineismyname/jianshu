import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { Redirect } from "react-router";
import { actionCreators } from "./store";
class Login extends Component {
  render() {
    if(!this.props.loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(input) => {
                this.account = input;
              }}
            ></Input>
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            ></Input>
            <Button onClick={() => this.props.login(this.account, this.password)}>
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else{
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState =(state) =>({
  loginStatus:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
  login(account, password) {
    console.log(account.value, password.value);
    dispatch(actionCreators.login());
  },
});

export default connect(mapState, mapDispatch)(Login);
