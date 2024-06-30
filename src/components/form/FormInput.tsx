import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


type FormInputProps = {
  name: string
  label?: string
  type: string
  defaultValue?: string
  placeholder?: string
}

export default function FormInput(props: FormInputProps) {
  const {label, name, type, defaultValue, placeholder} = props;

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>{label || name}</Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} placeholder={placeholder} required></Input>
    </div>  
  )
}
