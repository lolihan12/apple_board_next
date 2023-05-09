import { connectDB } from "@/utils/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(요청, 응답) {
  // 서버 기능(api)에서 사용할때는 요청, 응답, authOptions 3개의 params 필요 
  const session :any = await getServerSession(요청, 응답, authOptions)
  if(session){
    요청.body.author = session.user.email
  }
  if (요청.method == 'POST'){
    let db = (await connectDB).db('apple_board')
    let result = db.collection('post').insertOne(요청.body)
    응답.redirect(302, '/list')
  }
} 