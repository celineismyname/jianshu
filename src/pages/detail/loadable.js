import Loadable from 'react-loadable';
import React from 'react';


const LoadableComponent = Loadable({
    //import是异步加载的语法
  loader: () => import('./'),
  loading(){
      return <div>正在加载</div>
  },
});


//异步组件
export default <LoadableComponent/>

