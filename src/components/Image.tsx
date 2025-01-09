'use client'
import { IKImage } from 'imagekitio-next'
import React from 'react'

type ImageType = {
    path: string
    alt: string
    w?: number
    h?: number
    className?: string
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;


const Image = ({path, alt, w, h, className}: ImageType) => {
  return (
    <IKImage urlEndpoint={urlEndpoint} path={path} width={w} height={h} alt={alt} className={className} />
  )
}

export default Image