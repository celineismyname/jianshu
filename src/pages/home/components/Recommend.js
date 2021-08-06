import React, { Component } from "react";
import { connect } from "react-redux";
import { RecommendItem } from "../style";

class Recommend extends Component {
  render() {
    console.log(this.props.data)
    const { list } = this.props;
    return (
      <div>
        {list.map((item) => {
          return (
            <RecommendItem
              style={{
                background: item.get("bgColor"),
                color: item.get("fontColor"),
                cursor: "pointer"
              }}
              key={item.get("id")}
            >
              {item.get("title")} &gt;
              <img className="pic" alt="" src={item.get("imgUrl")} />
            </RecommendItem>
          );
        })}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
