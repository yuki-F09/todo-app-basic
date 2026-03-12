
import { Input } from "../ui/input"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"



  const onSubmit = ()=>{

  }

export const TodoForm =()=>{
  

const { register } = useForm();
const { name, ref, onChange, onBlur } = register("name");



      return (
    <div className="form-area m-10">
      <label htmlFor="name" className="mb-10">タイトル</label>
      <br/>
        <input
          type="text"
          id="title"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="タイトルを入力してください"
          className="border-2 rounded h-10 my-3 w-100"
        />
        <br/>

      <label htmlFor="name" className="">詳細</label>
      <br/>
        <input
          type="form-area"
          id="title"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="詳細を入力してください"
          className="border-2 rounded h-30 my-3 w-100"
        />
        <br/>
      <Button type="submit" className="rounded bg-yellow-400 hover:bg-yellow-500" >作成</Button>
    
    </div>
  )
}



