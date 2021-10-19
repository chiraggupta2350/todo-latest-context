export type TodosType = {
    input: string;
    Items:any[]
    ItemData:()=>void
    InputData: (e: any) => void;
    deleteItem:(index:number) =>void;
    editTodo:(index:number)=>void
    toggleSubmit:boolean
  };