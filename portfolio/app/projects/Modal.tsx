import { useState } from "react";

interface ModalProps {
  image: string;
  onClose: () => void;
}

const Modal = ({ image, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 m-64">
      <div className="relative bg-white p-4 rounded">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-700"
        >
          &times;
        </button>
        <img
          src={image}
          alt="Large view"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
