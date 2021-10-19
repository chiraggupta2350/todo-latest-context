import  { useEffect } from 'react'

const Usetitlecount = (count:number) => {
    useEffect(()=>{
        if(count>= 1){
             document.title =  `chats${count}`
        }else{
            document.title =   `chats`
        }
    },[count])
    
}

export default Usetitlecount