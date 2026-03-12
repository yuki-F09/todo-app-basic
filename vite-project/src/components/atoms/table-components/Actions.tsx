import {Button} from "../../ui/button"
import type {Todo} from "../../../types/type"
import { Checkbox } from "../../ui/checkbox"
import { AccordionTodo } from "@/components/organisms/Accordion"
import { useNavigate } from "react-router-dom";



interface Props {
  todo: Todo
}

export const TodoActions = ({todo}:Props) => {
  const navigate = useNavigate()
  const handleEdit = ()=>{
    return (
      navigate('/edit')
    )
  }
  const handleDelete = () =>{
  }

  return (
    <div className="flex gap-2">
      <Button variant="secondary" size="sm" onClick={handleEdit}>
        <svg className="h-8 w-8 text-emerald-400 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
      </Button>

      <Button variant="destructive" size="sm" onClick={handleDelete}>
        <svg className="h-8 w-8 text-red-400 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>

      </Button>

    </div>


  )
}


export const HandleNewTodo = ()=>{
  const navigate = useNavigate()
  return (
    navigate("/new")
  )
}

export const CheckAction = ({todo}:Props)=>{
  return (

    <Checkbox className="mx-2"/>
  )
}

export const OpenAccordion = ({todo}:Props)=>{
  return(
    <AccordionTodo todo={todo}/>
  )
}