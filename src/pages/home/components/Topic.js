import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import {connect} from 'react-redux'

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item)=>{
            return (
              <TopicItem key={item.get('id')}>
              <img
                className="topic-pic"
                alt={item.get('title')}
                src={item.get('imgUrl')}
              />
              {item.get('title')}
            </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state)=>({
  list:state.getIn(["home","topicList"])
})
const mapDispatchToProps = (dispatch)=>({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Topic);
