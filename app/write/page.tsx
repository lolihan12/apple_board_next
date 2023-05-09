import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Write() {
  const session = await getServerSession(authOptions)
    return (
      <div className="p-20">
        {
          session
          ?
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글제목"/>
          <input name="content" placeholder="글내용"/>
          <button type="submit">전송</button>
        </form>
          :
          <div>로그인하세요</div>
        }
      </div>
    )
} 