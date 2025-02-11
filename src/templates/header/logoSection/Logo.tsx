import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div>
      <Image width={300} height={90} className=' object-cover py-2 w-[250px] tablet:w-[200px] ' src='https://ladiesofvietnam.net/wp-content/uploads/2018/09/Ladies-of-Vietnam-Logo-Image-Words-CENTRE-700-200-3.jpg' alt='logo'/>
    </div>
  )
}

export default Logo