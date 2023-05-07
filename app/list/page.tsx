import { connectDB } from "@/utils/database"
import Link from "next/link";
import ListItem from "./ListImte";

// 이 페이지는 다이나믹 렌더링(새로고침이 필요한 페이지)
export const dynamin = 'force-dynamic'

// 이 페이지는 스태틱 랜더링
// export const dynamin = 'force-static'

export default async function List() {
  let db = (await connectDB).db('apple_board');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
        <ListItem result={result}/>
    </div>
  )
}