import React  from "react";
import styles from  './List.module.less';
import { CloseCircleOutlined ,FolderViewOutlined } from '@ant-design/icons';

const List = (props) => {

    const {setAddList , setHaveViewlist} = props;

    //已读
    const handleClickViewBtn = (item, index) =>{
        setHaveViewlist([...props.haveViewlist, item]);
        props.list.splice(index,1);
        setAddList([...props.list]);
    }

    //删除
    const handleClickCancleBtn = (index) =>{
        props.list.splice(index,1);
        setAddList([...props.list]);
    }

    return (
        <div className={styles.ListPageWrap}>
            <ul className="conul" style={{width:'100%'}}>
                {props.list.map((item,index)=>{
                return <li key={index}>{item}
                {props.isShowView &&
                <FolderViewOutlined 
                    style={{position:'absolute',right:'30px',top:'0',color:'blue'}} 
                    onClick={() => {handleClickViewBtn(item ,index)}}
                />
                }
                <CloseCircleOutlined 
                    style={{position:'absolute',right:'0',top:'0',color:'red'}} 
                    onClick={() => {handleClickCancleBtn(index)}}
                />
                </li>;
                })}
            </ul>
        </div>
    );
}
 
export default List;