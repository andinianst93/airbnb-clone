import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
export default function ImageInput() {
    const name = 'image'
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>Image</Label>
      <Input type='file' name={name} id={name} required accept='image/*' className='max-w-xs'/>
    </div>
  )
}