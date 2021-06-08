import React,{useState} from "react";
import styles from  './index.module.less';
import {Toast} from 'antd-mobile'
import List from '../../components/List/List';

const Index = (props) => {
  const [val, setVal] = useState('');
  const [addlist, setAddList] = useState([]);
  const [haveViewlist, setHaveViewlist] = useState([]);
  const [isShowView, setIsShowView] = useState(true);

  
  //输入监听
  const handleVal = (e) =>{
    const _val = e.target.value;
    setVal(_val);
  }

  //添加
  const handleClickAddBtn = (e) =>{
    if(val !== null && val !== "") {
      setAddList([...addlist,val]);
    }else {
      Toast.info('内容不能为空!');
    }
    setVal('');
  }

  return (
    <div className={styles.indexPageWrap}>
        <div className="headerCon">TodoList</div>
        <article className="contentCon">
          <div className="content">
            <input value={val} onChange={(e) => handleVal(e)} style={{width:'89%'}}></input>
            <button onClick={() => {handleClickAddBtn()}}>添加</button>
            <h3>全部</h3>
            <List 
              list={addlist}
              setAddList={setAddList} 
              isShowView={isShowView}
              haveViewlist = {haveViewlist}
              setHaveViewlist = {setHaveViewlist}
              setIsShowView = {setIsShowView}
            ></List>
            <h3>已读</h3>
            <List 
              list={haveViewlist}
              setAddList={setHaveViewlist} 
              isShowView={false}
            ></List>
          </div>
        </article>
    </div>
  );
}
 
export default Index;