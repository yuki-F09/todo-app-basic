import { Routes, Route} from "react-router-dom"

import { Page404 } from "../components/pages/Page404"
import { Index } from "../components/pages/Index" 
import { NewTodo } from "@/components/pages/NewTodo"


export const Router =(()=>{
  return(
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/new" element={<NewTodo/>}/>
      <Route path="/edit" element={<h1>edit</h1>}/>
    
      <Route path="*" element={<Page404/>} />


    </Routes>
  )
}


)