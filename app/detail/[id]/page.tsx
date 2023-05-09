import React from 'react'
import { connectDB } from "@/utils/database"
import {ObjectId} from "mongodb"

export default async function Detail(props) {
    let db = (await connectDB).db('apple_board');

    let result = await db.collection('post').findOne({_id:new ObjectId("64563c7d1ee0021088113056")})
    
    return (
    <div>
        page
    </div>
    )
}
