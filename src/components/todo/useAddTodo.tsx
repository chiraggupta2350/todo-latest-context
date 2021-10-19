import { useState } from 'react'

const UseAddtodo = () => {
    const [input,setInput] = useState<string>("");
    const  [Items,setItems] = useState<any[]>([])
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
    return ({ItemData,InputData,input,Items,deleteItem,editTodo,toggleSubmit})
}

export default UseAddtodo
