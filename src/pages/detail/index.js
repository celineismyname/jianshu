import React, { Component } from "react";
import { connect } from'react-redux'
import { DetailWrapper ,Header ,Content } from "./style";
import { actionCreators } from "./store";

class Detail extends Component {
  render() {
    return (
    <DetailWrapper>
      <Header>{this.props.title}</Header>
      < Content
      dangerouslySetInnerHTML={{__html:this.props.content}} />
    </DetailWrapper>
    );
  }
  componentDidMount(){
    this.props.getDetail(Number(this.props.match.params.id))
  }
}

const mapState = (state)=>({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch)=>({
  getDetail(id){
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState,mapDispatch)(Detail);
