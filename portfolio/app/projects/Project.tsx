"use client";
import Image from "next/image";

type Screenshot = string;

type ProjectProps = {
  title: string;
  description: string;
  screenshots: Screenshot[];
};

export default function Project({
  title,
  description,
  screenshots,
}: ProjectProps) {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{description}</p>
      </div>
      <div className="flex overflow-x-auto gap-5 pb-2 ">
        {screenshots.map((screenshot) => (
          <Image
            src={screenshot}
            height={600}
            width={600}
            alt={`${screenshot} screenshot`}
          />
        ))}
      </div>
    </div>
  );
}
