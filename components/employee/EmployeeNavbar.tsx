import Link from 'next/link'
import React from 'react'

const EmployeeNavbar = () => {
  return (
    <div className='flex-col items-center '>
      <ul className='flex m-10 gap-6 justify-end'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/blog/hello-world'>Blog Post</Link>
        </li>
      </ul>
    </div>
  )
}

export default EmployeeNavbar
