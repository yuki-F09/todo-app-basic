
//import { Input } from "../ui/input"

import { /*getFirestore, */ doc, setDoc, addDoc,collection,serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { useNavigate } from "react-router-dom";


import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"






export const TodoForm =()=>{
  const onClickBack = () => navigate(-1);

  
  const { register, handleSubmit,formState: { errors } } = useForm({
  defaultValues: {
    title: "初期値",
    body:"body",
  }
});


        //await setDoc(doc(db, 'todos'), data); addにしないとidをデフォで入れてくれない　editの時使いまわせる？
  const onSubmit = async (data:object) => {
      try {
        await addDoc(collection(db, "todos"), {
          ...data,
          status: "new",
          createdAt: serverTimestamp(),
        })
      } 
      catch (e) {
        console.error("ユーザーデータの登録中にエラーが発生しました: ", e);
        alert("ユーザーデータの登録に失敗しました。詳細はコンソールを確認してください。");
      }};

      return (
    <div className="form-area m-10">
      <label htmlFor="name" className="mb-10">タイトル</label>
      
      <br/>
        <input
          type="text"
          id="title"
          {...register("title",{required: 'タイトルは必ず入力してください'})} 
          placeholder="タイトルを入力してください"
          className="border-2 rounded h-10 my-3 w-full"
        />
        <p className="text-red-500">{errors.title && <span>{errors.title.message}</span>}</p>
        <br/>

      <label htmlFor="name" className="">詳細</label>
      <br/>
      <textarea
        id="body"
        {...register("body")}
        placeholder="詳細を入力してください"
        className="border-2 rounded h-32 my-3 w-full p-2 resize-none" 
      ></textarea>

        <br/>
      <Button onClick={handleSubmit(onSubmit)} type="submit" className="rounded bg-yellow-400 hover:bg-yellow-500" >作成</Button>

      <Button onClick={onClickBack} className="ml-5 bg-blue-400 hover:bg-blue-600">Todo一覧に戻る</Button>
    </div>
  )
}

