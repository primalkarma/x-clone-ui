
'use client'
import React from 'react'
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Post = () => {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        {/* Post Type */}
        <div className='flex items-center gap-2 text-sm text-textGray mb-2 font-bold'>
        <span>Lama Dev Reposted</span>
        </div>
        {/* Post Content */}
        <div className='flex gap-4'>
            
        </div>
    </div>
  )
}

export default Post