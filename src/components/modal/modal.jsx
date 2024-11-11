import React from "react";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm "
        onClick={onClose}
      ></div>
      <div
        className="relative z-10 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-[40px] text-[#FFD52A] z-50 top-2 right-6 hover:text-gray-900"
          onClick={onClose}
        >
          &times; {/* Close button */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
