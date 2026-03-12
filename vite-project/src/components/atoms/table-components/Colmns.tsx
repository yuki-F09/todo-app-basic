import type { ColumnDef } from "@tanstack/react-table"
import type { Todo } from "../../../types/type"
import { TodoActions, CheckAction, OpenAccordion } from "./Actions"



export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "checkbox",
    header: "",
    cell: ({row}) =>{
      return (
        <>
          <CheckAction todo={row.original}/>
        </>
      )}
  
  },
  {
    accessorKey: "title",
    header: "タイトル",
    cell: ({row}) =>{
      return (
        <div className="text-left">
          <OpenAccordion todo={row.original}/>
        </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: "状態",
    cell: ({row}) =>{
      return (
        <div className="text-left">
          {row.original.status === "完了"?
          <p><span className="bg-yellow-200">{row.original.status}</span></p> :
          <p>{row.original.status}</p>
          }
          </div>
      )
    }
  },
  {
    accessorKey:"actions",
    header:"アクション",
    cell: ({row})=>{
      return(
        <TodoActions todo={row.original}/>
      )


    }
  }

]