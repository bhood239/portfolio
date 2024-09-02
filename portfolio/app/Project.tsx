"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

type Screenshot = string;

type ProjectProps = {
  title: string;
  description: string;
  screenshots: Screenshot[];
  url: string;
};

export default function Project({
  title,
  description,
  screenshots,
  url,
}: ProjectProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="mb-10">
      <div className="max-w-3xl mx-auto text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
        </a>
        <p className="mb-4">{description}</p>
      </div>
      <div className="flex overflow-x-auto gap-5 pb-2 ">
        {screenshots.map((screenshot, index) => (
          <Image
            key={index}
            src={screenshot}
            height={600}
            width={600}
            alt={`${screenshot} screenshot`}
            className="cursor-pointer"
            onClick={() => handleImageClick(screenshot)}
          />
        ))}
      </div>
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}
