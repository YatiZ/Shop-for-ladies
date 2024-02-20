import { Skeleton } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <div className='justify-end items-end mx-44'>
        <Skeleton className='h-8 w-14 text-end'/>
    </div>
  )
}
