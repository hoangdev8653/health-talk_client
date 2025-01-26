import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div>
      <Image width={96} height={96} className=' object-cover' src='/images/logo.png' alt='logo'/>
    </div>
  )
}

export default Logo