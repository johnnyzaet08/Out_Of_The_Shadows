import React from 'react';

const ModalComponent = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;
  

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="relative bg-white-100 p-4 z-10 rounded-xl">
          {children}
          <div className='flex w-auto h-auto'>
              <button 
              className="ml-auto bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
              onClick={onClose}>
                Close
              </button>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default ModalComponent;
