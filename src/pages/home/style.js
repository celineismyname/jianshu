import styled from "styled-components";
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 240px;
  padding-top: 30px;
`;
/**
 * Topic组件
 */
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-10px;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float:left;
  margin-left:18px;
  margin-bottom:10px;
  background:#f7f7f7;
  height:32px;
  line-height:32px;
  padding-right:10px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic{
    display:block;
    float:left;
    margin-right:10px;
    width:32px;
    height:32px;
  }
`;
//************************************ */

/**
 * List组件
 */
export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    float:right;
    width:125px;
    height:100px;
    border-radius:10px;
  }
`;

export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`;

//************************************ */
/**
 * Recommend组件
 */
 export const RecommendItem = styled.div`
 overflow:hidden;
 padding:0 10px 0 20px;
 border:1px solid #dcdcdc;
 margin-bottom:10px;
 font-size:14px;
 border-radius:3px;
 line-height:34px;
 height:34px;
 .pic{
   display:block;
   float:right;
   margin-right:10px;
   width:53px;
   height:36px;
   border-radius:10px;
 }
`;


//************************************ */
/**
 * Recommend组件
 */
 export const WriterWrapper = styled.div`
 padding:20px 0 10px 0;
 overflow:hidden;
 margin-left:-10px;
 border-bottom:1px solid #dcdcdc;
`;

export const WriterItem = styled.div`
width:248px;
border:1px solid #dcdcdc;
border-radius:3px;
padding-top:10px;
height:78px;
line-height:32px;
.pic{
  display:block;
  float:left;
  margin-right:10px;
  width:55px;
  height:55px;
  border-radius:28px;
}
`;
//************************************ */
/**
 * LoadMore组件
 */
export const LoadMore = styled.div`
  width:100%;
  height:100%;
  line-height:40px;
  background:#a5a5a5;
  margin:30px 0; 
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`


//************************************ */
/**
 * BackTop
 */
 export const BackTop = styled.div`
 position:fixed;
 width:60px;
 right:100px;
 bottom:100px;
 height:60px;
 line-height:60px;
 font-size:14px;
 text-align:center;
 border:1px solid #dcdcdc;
`