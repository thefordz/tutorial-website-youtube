import React from 'react'
import {motion} from 'framer-motion'

const Modal = ({toggleModal, children}) => {

    const opacityVariants = {
        initial : {opacity : 0},
        animate : {opacity : 1},
        exit : {opacity : 0},
    }

    const contentVariants = {
        initial : {opacity : 0, y: 20},
        animate : {opacity : 1, y: 0},
        exit : {opacity : 0, y: 20},
    }


  return (
    // overlay
    <motion.div variants={opacityVariants} initial="initial" animate="animate" exit="exit" className=' fixed w-screen h-screen bg-black/50 backdrop-blur-sm'>
        {/* wrapper */}
        <div className=" relative container mx-auto p-8 w-full h-full">
            {/* close button */}
            <motion.button whileHover={{scale : 1.1}} whileTap={{scale : 0.9}} type='button' onClick={toggleModal} className='z-10 w-10 h-10 top-10 right-10 bg-black text-white rounded-full flex items-center justify-center absolute'>X</motion.button>
            {/* modal */}
            <motion.div variants={opacityVariants} initial="initial" animate="animate" exit="exit" transition={{duration : .3, ease : [0.26, 1, 0.32, 1]}} className="bg-white w-full h-full px-5 rounded-3xl">
                {/* content */}
                <motion.div variants={contentVariants} initial="initial" animate="animate" exit="exit" className=" w-full h-full flex flex-col overflow-hidden overflow-y-scroll scrollbar-hide">
                    {children}
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Modal