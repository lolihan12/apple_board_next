import React from 'react'
import { connectDB } from "@/utils/database"
import {ObjectId} from "mongodb"

export default async function Edit(props) {

    let db = (await connectDB).db('apple_board');
    let result = await db.collection('post').findOne({_id:new ObjectId(props.params.id)})

    return (
      <div className="p-20">
        <h4>수정페이지</h4>
        <form action="/api/post/edit" method="POST">
          <input name="title" placeholder="글제목" defaultValue={result.title}/>
          <input name="content" placeholder="글내용" defaultValue={result.content}/>
          <input name="_id" placeholder="ID" defaultValue={result._id.toString()}/>
          <button type="submit">수정</button>
        </form>
      </div>
    )
} 