"use client"
import { useState } from 'react'
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

export default function Home() {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <button onClick={toggleModal} className='bg-black text-white px-5 py-4 rounded-full' type='button'>Open Modal</button>
      <AnimatePresence>

      {openModal && <Modal toggleModal={toggleModal}>
        {/* content */}
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
          <span className="text-5xl">Content</span>
        </div>
        </Modal>}
      </AnimatePresence>
    </main>
  )
}
