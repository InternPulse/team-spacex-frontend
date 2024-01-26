// import React from 'react'
import frame1 from '../assets/Frame 1000002624.svg'

export default function Navbar() {
  return (
    <div className="container mx-auto">
        <nav className="flex">
            <img src={frame1} alt="" />
            <h3 className='py-5'>InvoicePilot</h3>
        </nav>
    </div>
  )
}
