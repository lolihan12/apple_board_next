import Image from 'next/image'
import styles from './page.module.css'
import { MongoClient } from 'mongodb'
import { connectDB } from '@/utils/database'

export default async function Home() {
  const client = await connectDB;
  const db = client.db("apple_board")

  let result = await db.collection("post").find().toArray()
  return (
    <div>ㅎㅇ</div>
  )
}
