import React, { Component } from "react";
import { WriterWrapper ,WriterItem } from "../style";

class Writer extends Component {
  render() {
    return <WriterWrapper>
      <WriterItem>
        <img 
          className="pic"
          alt=""
          src="http://img60.ddimg.cn/topic_img/gys_0014951/DK_LA.jpg"
        />
        简书钻首席小管家
      </WriterItem>
    </WriterWrapper>;
  }
}

export default Writer;
