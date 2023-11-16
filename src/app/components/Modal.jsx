import React from 'react'
import {motion} from 'framer-motion'

const Modal = ({toggleModal, children, height ,width}) => {

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
    <motion.div variants={opacityVariants} initial="initial" animate="animate" exit="exit" className=' fixed w-screen h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center'>
        {/* wrapper */}
        <div className="w-full h-full flex items-center justify-center container mx-auto p-8">
            {/* modal */}
            <motion.div variants={opacityVariants} initial="initial" animate="animate" exit="exit" transition={{duration : .3, ease : [0.26, 1, 0.32, 1]}} className={`w-[${width}] h-[${height}] bg-white relative mx-auto my-auto px-5 rounded-3xl`}>
                {/* close button */}
                <motion.button whileHover={{scale : 1.1}} whileTap={{scale : 0.9}} type='button' onClick={toggleModal} className='z-10 w-10 h-10 top-2 right-2 bg-black text-white rounded-full flex items-center justify-center absolute'>X</motion.button>
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