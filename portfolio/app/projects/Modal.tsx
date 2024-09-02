import Image from "next/image";

interface ModalProps {
  image: string;
  onClose: () => void;
}

const Modal = ({ image, onClose }: ModalProps) => {
  return (
    <div className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-white p-4 rounded">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-700"
        >
          &times;
        </button>
        <Image
          src={image}
          height={1000}
          width={1000}
          alt="Large view"
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
