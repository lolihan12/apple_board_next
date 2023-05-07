import { connectDB } from "@/utils/database"
import { ObjectId } from "mongodb";

export default async function handler(요청 :any, 응답:any) {
  if (요청.method == 'POST'){
    console.log("============================")
    console.log("요청 : ", 요청)
    console.log("============================")
      let db = (await connectDB).db('apple_board') 
      let result = await db.collection('post').deleteOne({_id : new ObjectId(요청.body._id)});
      console.log("@@@@@@@@@@@",result)
      console.log("@@@@@@@@@@@",요청)
      응답.status(200).json('삭제완료')
    // 만약에 result 결과가 이상하면 응답.status(500)
    // result 결과가 정상이면 응답.status(200)
  }
}