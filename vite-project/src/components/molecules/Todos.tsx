import type { Todo } from "../../types/type"

import { columns } from "../atoms/table-components/Colmns"
import { DataTable } from "../atoms/table-components/Table"



const exampleTodo1:Todo = {
  id:1,
  title:"今日の宿題",
  body:"これを終わらせること",
  status:"完了"
}

const exampleTodo2:Todo = {
  id:2,
  title:"明日の宿題",
  status:"未完了"
}

const exampleTodo3:Todo={
  id:3,
  title:"タイトルの長さが長いとどう崩れるかaaaaaaaaaaaaaaaaadddddddddddd",
  status:"未完了",
  body:"dddddaddddddddddddddddddddddddddddddddddddddddddnnnnnnnaaaaaaaaaaaaaaaasssssserrrrrrrrrrrrrrrrrrrrrrrr"
}


const TodoExamples = [exampleTodo1, exampleTodo2,exampleTodo3 ]

export const Todos = ()=>{
  return(
    <>
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={TodoExamples} />
    </div>

  
  </>
  )
}

/*

    {TodoExamples.map((todo)=>{
      return(
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={todo} />
        </div>

    <div className="todo flex" key={todo.id}>
      <h3 className="pr-5">{todo.title}</h3>
      <p>{todo.status}</p>

      <Button className="mx-1 bg-teal-400 hover:bg-teal-600 rounded-md">編集</Button>
      <Button className="mx-1 bg-red-400 hover:bg-red-600 rounded-md">編集</Button>
    </div>
      )
    })
    
    }

*/