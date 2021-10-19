import {createContext, FC} from 'react'
import UseAddtodo from '../components/todo/useAddTodo';

import { TodosType } from "../types/types";

const contextDefaultValues:TodosType  = {
    input:"",
    Items:[],
    ItemData:() =>{},
    InputData: () => {},
    deleteItem:() => {},
    editTodo:()=>{},
    toggleSubmit:true
  };

export const Contextvalue = createContext<TodosType>(contextDefaultValues)

const ContextProvider :FC =({children}) => {
  
   const {ItemData,InputData,input,Items,deleteItem,toggleSubmit,editTodo} = UseAddtodo()
  
    return (
        <Contextvalue.Provider value={{Items,toggleSubmit,InputData,deleteItem,ItemData,editTodo,input}}>
        {children}
        </Contextvalue.Provider>
    )
}

export default ContextProvider
