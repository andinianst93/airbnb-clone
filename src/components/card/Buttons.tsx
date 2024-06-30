"use client"
import React from 'react'
import { ReloadIcon } from '@radix-ui/react-icons';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

export function SubmitButton({className='', text='submit'}: SubmitButtonProps){
  const {pending} = useFormStatus();
  return <Button type='submit' className={`capitalize ${className}`} size='lg' disabled={pending}>{pending ? <><ReloadIcon className='mr-2 h-4 w-4 animate-spin'/>Please wait...</> : text}</Button>
}
