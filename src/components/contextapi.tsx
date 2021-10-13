import React,{createContext, FC, useState} from 'react'
import { TodosType } from './types';

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
    const [input,setInput] = useState<string>("");
    const [Items,setItems] = useState<any[]>([])
    const [toggleSubmit,settoggleSubmit] = useState(true)
    const [isEditItem,setisEditItem] = useState(null)
    const InputData = (e:any) =>{
      setInput(e.target.value)
    }
    const ItemData = () =>{
       if(!input){
          alert("plz filled the data")
       }
       else if(input && !toggleSubmit){
         setItems(
            Items.map((elem)=>{
               if(elem.id === isEditItem ){
                  return {...elem,data:input}
               }
               return elem
            })
            
         )
         settoggleSubmit(true)
         setInput("")
         setisEditItem(null)
       }
       else{
       const includeId = { id :new Date().getTime().toString(),data:input}
       setItems([...Items,includeId])
       setInput("")
    }
   }
    const deleteItem = (i:any) =>{
        const remainingtodo = Items.filter((elem)=>{
          return elem.id !== i
        })
        setItems(remainingtodo)
     }

    const editTodo = (i:any) =>{
       const editItem = Items.find((elem)=>{
          return elem.id === i 
       })
       settoggleSubmit(false)
       setInput(editItem.data)
       setisEditItem(i)
    }
    return (
        <Contextvalue.Provider value={{Items,toggleSubmit,InputData,deleteItem,ItemData,editTodo,input}}>
        {children}
        </Contextvalue.Provider>
    )
}

export default ContextProvider
