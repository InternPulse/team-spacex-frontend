// import {
//     FaTh,
//     FaBars,
//     FaFileAlt,
//     FaUser,
//     FaRegSun
// }from "react-icons/fa";
// import { useState } from "react";
// import { NavLink } from 'react-router-dom';
// // import '../styles/Dashboard.css'


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/invoice",
//             name:"Invoice",
//             icon:<FaFileAlt/>
//         },
//         {
//             path:"/customer",
//             name:"Customer",
//             icon:<FaUser/>
//         },
//         {
//             path:"/settings",
//             name:"Settings",
//             icon:<FaRegSun/>
//         }
//     ]
//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;

import { useState } from 'react'
import '../styles/Sidebar.css'
import invoicepilotlogo from '../assets/invoicepilotlogo.svg'
import {Link} from 'react-router-dom'
import { SidebarDB } from '../SidebarDB'
import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai"


export default function Sidebar() {
  const [open,setOpen] = useState(false)

  return (
    <div className='sidebar'>
        <div className='sidebar-inner m-auto'>
            <div className='flex'>
                <img src={invoicepilotlogo} alt={invoicepilotlogo} />
                <h2>InvoicePilot</h2>
            </div>
            <div>
              <div onClick={()=>setOpen(!open)} className='bg-blue-200 p-2.5  flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-3 border-transparent active:border-black duration-300 active:text-blue-500'>
                <p>Menu</p>
                {!open ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </div>
            </div>
            <div>
              {SidebarDB.map((items, i)=>{
                const {name,icon,path} = items
                return(
                  <div key={i} className='h-[60px]'>
                    <Link 
                    to={path} 
                    className='flex sidebar-link' activeclassName='active'
                    >
                      <img src={icon} alt=""  id='icon'/>
                      <p id='name'>{name}</p>
                    </Link>
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  )
}

