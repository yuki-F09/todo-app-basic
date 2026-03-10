import { useState } from 'react'

import './App.css'

import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
/**
 * const userObject = { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz"};
 * const documentId = userObject.id.toString();
 *  // FirestoreのドキュメントIDは文字列なので変換const { id, ...userData } = userObject; 
 * // idを除いたデータ// userData は以下のようになる// 
 * {"name": "Leanne Graham","username": "Bret", "email": "Sincere@april.biz"} 


 */


function App() {
  const [count, setCount] = useState(0)



  const userObject = { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz"};

  const onClickUserButton = async () => { // 非同期処理なので async を追加
    const documentId = userObject.id.toString(); // FirestoreのドキュメントIDは文字列なので変換
    const { id, ...userData } = userObject; // ドキュメントの内容からは id を除外する

    try {
      // 'users' コレクションの、documentId を持つドキュメントへの参照を作成し、userData を保存
      await setDoc(doc(db, 'users', documentId), userData);
      console.log("ユーザーデータがFirestoreに正常に登録されました。ドキュメントID: ", documentId);
      // ここでユーザーに成功メッセージを表示するなどの処理を追加できます
      alert(`ユーザー (${userData.name}) が登録されました！`);
    } catch (e) {
      console.error("ユーザーデータの登録中にエラーが発生しました: ", e);
      // ここでユーザーにエラーメッセージを表示するなどの処理を追加できます
      alert("ユーザーデータの登録に失敗しました。詳細はコンソールを確認してください。");
    }
  };


  return (
    <>
    <p>とりあえずこれcssの適用もけさないとか</p>

    <button onClick={onClickUserButton}>userの保存</button>
    

    <p >ユーザー名: {userObject.name}</p>
    </>
  )
}

export default App
