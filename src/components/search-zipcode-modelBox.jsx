import React from 'react'
import Modal from 'react-modal';
import SearchForm from './searchform';
import { AiOutlineClose } from 'react-icons/ai';

const customStyles = {
     content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)',
     },
  };

const SearchZipcodeModelBox = ({modalIsOpen, setIsOpen}) => {  

  function closeModal() {
    setIsOpen(false);
  }

  return (
     <Modal
     isOpen={modalIsOpen}
     onRequestClose={closeModal}
     style={customStyles}
     contentLabel="Example Modal"
   >
     <button onClick={closeModal} className='text-2xl absolute right-4'><AiOutlineClose/></button>
     <section className="min-h-[55vh] flex items-center">
        <div className="container mx-auto px-10">
          <div >
            <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
              Find <span className="text-[#EF9831]">TV, Internet & Home Phone </span> Service Providers
            </h1>
            <p className="text-xl text-center font-[Roboto] my-5">
              Enter your zip code so we can find the best providers in your area:
            </p>
            <div className='grid justify-center'>
              <SearchForm types closeModal={closeModal}/>
            </div>
          </div>
        </div>
      </section>
   </Modal>
  )
}

export default SearchZipcodeModelBox
