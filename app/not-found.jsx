'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
   <div>
     <h2>Not Found</h2>
     <br />
     <button onClick={()=>router.back()}>Back</button>
   </div>
  )
}
