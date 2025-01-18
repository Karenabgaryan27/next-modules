'use client'

import React from 'react'

export default function Error({error= 'custom error'}) {
  return (
    <div>{error.message}</div>
  )
}
