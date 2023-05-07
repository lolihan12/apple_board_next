`use client`
import React from 'react'
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function DetailLink() {
    const router = useRouter()
    let a = usePathname()
    let b = useSearchParams()
    return (
        <button onClick={()=>{router.prefetch('/detail/1')}}>버튼</button>
    )
}
