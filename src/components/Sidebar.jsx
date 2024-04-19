import React, { useState } from 'react'
import { Link } from "react-scroll"
import {delay, motion} from 'framer-motion';
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
//import { Link } from "react-scroll";

function Sidebar() {
    const [open,setOpen]=useState(false);

    const variant= {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath:"circle(25px at 50px 50px)",
            transition:{
                type:"spring",
                delay:0.5,
                stiffness:400,
                damping:40,
            },
        },
    };

    const linkVariants={
        open:{
            transition:{
                staggerChildren:0.1,
            },
        },
        closed:{
            transition:{
                staggerChildren:0.05,
                staggerDirection:-1,
            }
        }
    };

    const itemVariants={
        open:{
           y:0,
           opacity:1,
        },
        closed:{
            y:50,
            opacity:0,
        },
    };

    const links=["Home", "About", "Skills","Projects","Services", "Timeline","Testimonials","Contact"]

  return (
    <motion.div className='flex flex-col items-center justify-center bg-white text-black' animate={open? "open" : "closed"}>
        <motion.div className='fixed z-40 top-0 left-0 bottom-0 w-[400px] bg-white' variants={variant}>
            <motion.div className='absolute w-[100%] h-screen flex flex-col items-center justify-center gap-[30px] text-2xl tracking-wider' variants={linkVariants}>
                {links.map((link)=>(
                    <motion.Link to={`${link}`} spy={true} smooth={true} offset={50} duration={500} key={link} variants={itemVariants} onClick={()=>setOpen((prev)=>!prev)} whileHover={{scale:1.2}}  whileTap={{scale:0.95}}>
                        {link}
                    </motion.Link>
                ))}
            </motion.div>
        </motion.div>
        {open?(<button className='w-[30px] z-50 h-[30px] rounded-[50%] fixed top-[35px] left-[35px] border-0 cursor-pointer' onClick={()=>setOpen((prev)=>!prev)}><RiMenuUnfoldLine className='text-3xl'/></button>
        ):(<button className='fixed z-50 top-[35px] left-[35px]   border-0 cursor-pointer' onClick={()=>setOpen((prev)=>!prev)}><RiMenuFoldLine className='text-3xl' /></button>)
        }
    </motion.div>

  )
}

export default Sidebar
