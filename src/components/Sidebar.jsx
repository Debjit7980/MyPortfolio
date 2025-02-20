import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";

function Sidebar() {
    const [open, setOpen] = useState(false); // Initial state is closed

    const variant = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(25px at 50px 50px)",
            transition: {
                type: "spring",
                delay: 0.5,
                stiffness: 400,
                damping: 40,
            },
        },
    };

    const linkVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };

    const links = ["Home", "About", "Skills", "Projects", "Timeline", "Contact"];

    return (
        <motion.div
            className='flex flex-col items-center justify-center bg-white text-black fixed z-50'
            variants={variant}
            initial="closed"
            animate={open ? "open" : "closed"}
            
        >
            <motion.div
                className='fixed top-0 left-0 bottom-0 w-[400px] bg-white'
                variants={variant}
            >
                <motion.div
                    className='absolute w-[100%] h-screen flex flex-col items-center justify-center gap-[30px] text-2xl tracking-wider'
                    variants={linkVariants}
                >
                    {links.map((link) => (
                        <motion.a
                            href={`#${link}`}
                            key={link}
                            variants={itemVariants}
                            onClick={() => setOpen(false)} // Close the sidebar on link click
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
            {open ? (
                <button
                    className='w-[30px] z-50 h-[30px] rounded-[50%] fixed top-[35px] left-[35px] border-0 cursor-pointer'
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <RiMenuFoldLine className='text-3xl' />
                </button>
            ) : (
                <button
                    className='fixed z-50 top-[35px] left-[35px] border-0 cursor-pointer'
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <RiMenuUnfoldLine className='text-3xl' />
                </button>
            )}
        </motion.div>
    );
}

export default Sidebar;
