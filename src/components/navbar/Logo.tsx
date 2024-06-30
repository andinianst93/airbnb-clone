import React from 'react'
import { RiTentLine } from "react-icons/ri";
import { Button } from '../ui/button';
import Link from 'next/link';
export default function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href={'/'}>
        <RiTentLine className='w-6 h-6'/>
      </Link>
    </Button>
  )
}
