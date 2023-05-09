'use client'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'

export default function LoginBtn() {
  return (
    <>
        <button onClick={()=>{ signIn() }}>로그인버튼</button>
        <button onClick={()=>{ signOut() }}>로그아웃버튼</button> 
    </>
  )
}
