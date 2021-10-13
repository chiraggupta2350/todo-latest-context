import React, { useContext } from 'react'
import "./index"
import ContextProvider, { Contextvalue } from './components/contextapi'

const Todos = () => {
 const {Items,InputData,toggleSubmit,deleteItem,ItemData,editTodo,input} = useContext(Contextvalue)
  return (
    <>
    <div className="center">
      <input  type = "text" value={input} onChange={(e)=>{InputData(e)}}/>
      {
        toggleSubmit?<i className="fa fa-plus add-btn" onClick={()=>{ItemData()}}></i>:
        <i className="far fa-edit btn"  onClick={()=>{ItemData()}}  ></i>
      }
    </div>
    <div className="center">
      <ol>
       {Items.map((itemval)=>{
         console.log(Items)
         return <li key={itemval.id}>{itemval.data}<i className="far fa-trash-alt btn" onClick={()=>deleteItem(itemval.id)}></i>
          <i className="far fa-edit btn" onClick={()=>editTodo(itemval.id)}></i></li> 
       })}
       </ol>
    </div>
    </>
  )
}

export default () => (
  <ContextProvider>
    <Todos />
  </ContextProvider>
);

