import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Write extends Component {
  render() {
    if(this.props.loginStatus){
      return (
        <div>
          写文章页面
        </div>
      );
    }else{
      return <Redirect to='/login'></Redirect>
    }
  }
}

const mapState =(state) =>({
  loginStatus:state.getIn(['login','login'])
})


export default connect(mapState, null)(Write);
